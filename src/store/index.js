import Vue from "vue";
import Vuex from 'vuex';
import comments from './modules/comment'
import article from './modules/article'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        comments,
        article
    }
});