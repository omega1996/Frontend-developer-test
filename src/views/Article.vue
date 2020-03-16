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
        <comment-form></comment-form>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CommentForm from "../components/CommentForm";

export default {
    name: "Article",
    computed: mapGetters(['articleText']),
    data(){
        return{}
    },
    components:{
        CommentForm
    }
}
</script>
