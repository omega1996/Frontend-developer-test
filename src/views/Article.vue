<template>
    <div class="article">
        <router-link class="article-title" to="/"> Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Cum doloremque obcaecati quisquam
            reprehenderit soluta. Alias cum iure minima molestiae
            nam nihil totam voluptatibus? Aspernatur nisi officiis
            quod temporibus ut vero.</router-link>
        <div class="article-date">01/01/2014</div>

        <div>
            {{articleText}}
        </div>
        <div class="article-comments">
            <h3>Комментарии:</h3>
            <comment-template></comment-template>
            <comment-form></comment-form>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CommentForm from "../components/CommentForm";
import CommentTemplate from "../components/CommentTemplate";

export default {
    name: "Article",
    computed: mapGetters(['articleText']),
    data(){
        return{}
    },
    components:{
        CommentForm,
        CommentTemplate
    }
}
</script>
