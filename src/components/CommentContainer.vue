<template>
    <div class="article-comments">
        <h3>Комментарии:</h3>

        <comment-template v-for="comment in allMockComments"
                          :key="comment.id"
                          :comment="comment">
            {{ comment.text }}
        </comment-template>

        <comment-form></comment-form>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

import CommentTemplate from "../components/CommentTemplate";
import CommentForm from "../components/CommentForm";

export default {
    name: "CommentContainer",
    computed: {
        ...mapGetters(['allMockComments'])
    },
    components:{
        CommentTemplate,
        CommentForm
    }
}
</script>

<style scoped>

</style>