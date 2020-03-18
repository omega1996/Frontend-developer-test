<template>
    <div class="article-comments">
        <h3>Комментарии:</h3>

        <comment-template v-for="comment in allMockComments"
                          :key="comment.id"
                          :comment="comment"
                          :time="currentTime">
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
    },
    data() {
        return{
            currentTime: Date.now(),
            timer: null
        }
    },
    mounted() {
        this.startTimer()
    },
    destroyed() {
        this.stopTimer()
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.currentTime += 1000
            }, 1000)
        },
        stopTimer() {
            clearTimeout(this.timer)
        },
    }
}
</script>

<style scoped>

</style>