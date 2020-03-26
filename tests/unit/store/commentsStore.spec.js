import commentStore from "@/store/modules/comment";

const mockComments = [
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
        text: 'lorem reply to first',
        userName: 'Dolor Ipsum',
        timeStamp: 1584420823049,
        hidden: false
    },
    {
        id: 2,
        reply: 1,
        rating: 0,
        text: 'lorem me **reply** to second',
        userName: 'Sit Amet Ipsum',
        timeStamp: 1584420823049,
        hidden: false
    }
];

const state = {mockComments};

describe('Comment getters work properly', () => {
    test('return comments with level', () => {
        const comments = commentStore.getters.allMockComments(state);
        comments.forEach((comment) => {
            expect(typeof comment.level).toBe('number')
        })
    });
    test('level fits with replies', () => {
        const comments = commentStore.getters.allMockComments(state);
        comments.forEach((comment) => {
            if (comment.reply === comment.id) {
                expect(comment.level).toBe(0)
            } else {
                expect(comment.level).not.toBe(0)
            }
        })
    })
});

describe('Comment mutations', () => {
    test('increment should add to rating', () => {
        mockComments.forEach((comment) => {
            let rating = comment.rating;
            commentStore.mutations.increment(state, comment.id);
            expect(comment.rating).toBe(rating + 1)
        })
    });
    test('decrement should add to rating', () => {
        mockComments.forEach((comment) => {
            let rating = comment.rating;
            commentStore.mutations.decrement(state, comment.id);
            expect(comment.rating).toBe(rating - 1)
        })
    });
    test('hide comment', () => {
        let comment = mockComments.find(element => element.id === 0);
        expect(comment.hidden).toBeFalsy();
        commentStore.mutations.hideComment(state, 0);
        expect(comment.hidden).toBeTruthy();
    });
    test('adding new comment without reply', () => {
        let commentLength = mockComments.length;
        commentStore.mutations.addComment(state, {text: 'Lorem Ipsum', userName: 'Sit Amet'});
        let lastComment = mockComments[mockComments.length - 1];
        expect(mockComments.length).toBe(commentLength + 1);
        expect(typeof lastComment.id).toBe('number');
        expect(lastComment.reply).toBe(mockComments[mockComments.length - 1].id);
        expect(typeof lastComment.rating).toBe('number');
        expect(typeof lastComment.timeStamp).toBe('number');
        expect(lastComment.hidden).toBe(false);
        expect(lastComment.text).toBe('Lorem Ipsum');
        expect(lastComment.userName).toBe('Sit Amet');
    })
});

