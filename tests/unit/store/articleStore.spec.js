import articleStore from "@/store/modules/article";

const article = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, totam?';
const title = 'Lorem Ipsum dolor sit amet';

const state = {article, title};

describe('Article getters work properly', () => {
    test('return title', () => {
        const articleTitle = articleStore.getters.articleTitle(state);
        expect(articleTitle).toBe(title);
    });
    test('return text', () => {
        const articleText = articleStore.getters.articleText(state);
        expect(articleText).toBe(article)
    })
});