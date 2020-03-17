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
            <br>
            <br>
            {{articleText}}
            <br>
            <br>
            {{articleText}}
        </div>
        <comment-container></comment-container>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CommentContainer from "../components/CommentContainer";

export default {
    name: "Article",
    computed: {
        ...mapGetters(['articleText'])
    },
    data(){
        return{}
    },
    components:{
        CommentContainer
    }
}
</script>
