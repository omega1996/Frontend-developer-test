export default {
    actions: {},
    mutations: {},
    state: {
        comments: [],
        mockComments: [
            {
                id: 0,
                reply: 0,
                rating: 0,
                text: 'lorem',
                userName: 'Lorem Ipsum',
                timeStamp: 1584420823049
            },
            {
                id: 1,
                reply: 0,
                rating: 1,
                text: 'lorem Ipsum',
                userName: 'Lorem Ipsum',
                timeStamp: 1584420823049
            },
            {
                id: 2,
                reply: 1,
                rating: 0,
                text: 'lorem',
                userName: 'Lorem Ipsum',
                timeStamp: 1584420823049
            },
            {
                id: 4,
                reply: 4,
                rating: 2,
                text: 'lorem ipsum dolor sit amet',
                userName: 'Lorem Ipsum',
                timeStamp: 1584420823049
            },
        ]
    },
    getters: {
        allComments(state){
            return state.comments
        },
        allMockComments(state){
            return state.mockComments.map((element, index, array) => {
                if (element.reply === element.id) {
                    element.level = 0
                } else {
                    let parent = array.find(value => value.id === element.reply);
                    if (parent.reply === parent.id){
                        element.level = 1
                    } else {
                        element.level = 2
                    }
                }
                return element
            })
        }
    }
}