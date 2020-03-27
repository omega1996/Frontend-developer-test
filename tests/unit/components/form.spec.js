import Vuex from 'vuex'
import {shallowMount, createLocalVue} from '@vue/test-utils'
import CommentForm from '@/components/CommentForm.vue'
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


describe('CommentForm.vue', () => {
    test('exists', () => {
        const wrapper = shallowMount(CommentForm, {
            localVue,
            store
        });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.add-comment').exists()).toBeTruthy()
    })
});
