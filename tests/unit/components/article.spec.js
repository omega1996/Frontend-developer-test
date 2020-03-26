import Vuex from 'vuex'
import {shallowMount, createLocalVue} from '@vue/test-utils'
import Article from '@/views/Article.vue'
import router from '@/router'
import parse from "@/components/MarkdownParser";
import store from '@/store'

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(router);

localVue.mixin({
    methods: {
        markdown(value) {
            return parse(value)
        }
    }
});

describe('Article.vue', () => {
    test('exists', () => {
        const wrapper = shallowMount(Article, {
            localVue,
            store
        });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.article-title').text()).toBe(store.getters.articleTitle)
    })
});
