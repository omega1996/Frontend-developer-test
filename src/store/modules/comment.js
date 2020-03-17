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
                comment: 'lorem',
                userName: 'Lorem Ipsum',
                timeStamp: 1584420823049
            },
            {
                id: 1,
                reply: 0,
                rating: 1,
                comment: 'lorem Ipsum',
                userName: 'Lorem Ipsum',
                timeStamp: 1584420823049
            },
            {
                id:2,
                reply: 1,
                rating: 0,
                comment: 'lorem',
                userName: 'Lorem Ipsum',
                timeStamp: 1584420823049
            },
            {
                id:3,
                reply: 2,
                rating: 2,
                comment: 'lorem',
                userName: 'Lorem Ipsum',
                timeStamp: 1584420823049
            }
        ]
    },
    getters: {
        allComments(state){
            return state.comments
        },
        allMockComments(state){
            return state.mockComments
        }
    }
}