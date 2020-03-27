import Vuex from 'vuex'
import {shallowMount, createLocalVue} from '@vue/test-utils'
import CommentContainer from '@/components/CommentContainer.vue'
import store from '@/store'

const localVue = createLocalVue();
localVue.use(Vuex);


describe('CommentContainer.vue', () => {
    test('exists', () => {
        const wrapper = shallowMount(CommentContainer, {
            localVue,
            store
        });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('h3').text()).toBe('Комментарии:');
    })
});
