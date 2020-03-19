export default {
    actions: {},
    mutations: {
        increment(state, commentId) {
            state.mockComments.find(x => x.id === commentId).rating += 1
        },
        decrement(state, commentId) {
            state.mockComments.find(x => x.id === commentId).rating -= 1
        },
        addComment(state, comment) {
            comment.id = Math.max(...state.mockComments.map(x => x.id)) + 1;
            comment.rating = 0;
            if (!comment.reply) {
                comment.reply = comment.id
            }
            comment.timeStamp = Date.now();
            state.mockComments.push(comment)
        },
        hideComment(state, commentId) {
            let comment = state.mockComments.find(x => x.id === commentId);
            comment.hidden = !comment.hidden
        }
    },
    state: {
        comments: [],
        mockComments: [
            {
                id: 0,
                reply: 0,
                rating: 0,
                text: 'lorem ***first*** Ipsum',
                userName: 'Lorem Dolor',
                timeStamp: 1584420823049,
                hidden: false
            },
            {
                id: 1,
                reply: 0,
                rating: 1,
                text: 'lorem Ipsum second reply to first',
                userName: 'Dolor Ipsum',
                timeStamp: 1584420823049,
                hidden: false
            },
            {
                id: 2,
                reply: 1,
                rating: 0,
                text: 'lorem me reply to second',
                userName: 'Sit Amet Ipsum',
                timeStamp: 1584420823049,
                hidden: false
            },
            {
                id: 4,
                reply: 4,
                rating: 2,
                text: 'lorem ipsum dolor sit amet',
                userName: 'Lorem Ipsum',
                timeStamp: 1584540000000,
                hidden: false
            },
            {
                id: 5,
                reply: 0,
                rating: -11,
                text: 'lorem ipsum dolor sit amet reply to first',
                userName: 'Lorem Ipsum',
                timeStamp: 1584400000000,
                hidden: false
            },
            {
                id: 6,
                reply: 2,
                rating: 2,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ' +
                    'blanditiis deleniti dignissimos doloribus eveniet fuga fugiat iure quibusdam quos velit.',
                userName: 'Lorem Ipsum',
                timeStamp: 1584000000000,
                hidden: false
            },
            {
                id: 7,
                reply: 6,
                rating: 2,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ',
                userName: 'Lorem Ipsum',
                timeStamp: 1584420823049,
                hidden: false
            },
            {
                id: 8,
                reply: 5,
                rating: 2,
                text: ' reply to dolor first',
                userName: 'Lorem Ipsum',
                timeStamp: 1584420823049,
                hidden: false
            },
        ]
    },
    getters: {
        allComments(state) {
            return state.comments
        },
        allMockComments(state) {
            let answer = [];
            for (let i = 0; i < state.mockComments.length; i++) {
                let element = state.mockComments[i];
                if (element.reply === element.id) {
                    element.level = 0;
                    answer.push(element)
                } else {
                    let parent = answer.find(value => value.id === element.reply);
                    if (parent === undefined || parent.hidden) {
                        continue;
                    }
                    let parentIndex = answer.findIndex(value => value.id === element.reply);
                    if (parent.reply === parent.id) {
                        element.level = 1
                    } else {
                        element.level = 2
                    }
                    answer.splice(parentIndex, 0, element)
                }
            }
            return answer.reverse()
        }
    }
}