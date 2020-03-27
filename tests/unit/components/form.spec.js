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
    });

    test('form validation', async () => {
        const wrapper = shallowMount(CommentForm, {
            localVue,
            store
        });
        let lengthBeforeAdd = store.getters.allMockComments.length;
        const checkLength = function(){
            return lengthBeforeAdd === store.getters.allMockComments.length
        };

        wrapper.find('button').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.errors).toMatchObject(["Требуется указать имя.",
            "Требуется указать правильную почту.",
            "Требуется указать текст комментария."]);
        expect(wrapper.find('.success').exists()).toBeFalsy();
        expect(checkLength()).toBeTruthy();

        wrapper.find('#name').setValue('Lorem Ipsum');
        wrapper.find('button').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.errors).toMatchObject(["Требуется указать правильную почту.",
            "Требуется указать текст комментария."]);
        expect(wrapper.find('.success').exists()).toBeFalsy();
        expect(checkLength()).toBeTruthy();

        wrapper.find('#email').setValue('Lorem Ipsum');
        wrapper.find('button').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.errors).toMatchObject(["Требуется указать правильную почту.",
            "Требуется указать текст комментария."]);
        expect(wrapper.find('.success').exists()).toBeFalsy();
        expect(checkLength()).toBeTruthy();

        wrapper.find('#email').setValue('Lorem@ipsum.com');
        wrapper.find('button').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.errors).toMatchObject(["Требуется указать текст комментария."]);
        expect(wrapper.find('.success').exists()).toBeFalsy();
        expect(checkLength()).toBeTruthy();

        wrapper.find('#commentText').setValue('Lorem Ipsum Dolor Sit Amet');
        wrapper.find('button').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.errors).toMatchObject([]);
        expect(wrapper.find('.success').exists()).toBeTruthy();
        expect(checkLength()).toBeFalsy();
    })
});
