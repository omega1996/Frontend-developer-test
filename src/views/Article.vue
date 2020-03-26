<template>
    <div class="article">
        <router-link class="article-title" to="/">{{articleTitle}}</router-link>
        <div class="article-date">01/01/2014</div>

        <div class="article-text" v-html="markdowned">

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
            ...mapGetters(["articleText", "articleTitle"]),
            markdowned() {
                return this.markdown(this.articleText)
            }
        },
        data() {
            return {}
        },
        components: {
            CommentContainer
        }
    }
</script>
