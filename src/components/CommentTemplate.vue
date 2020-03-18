<template>
    <div>
        <button :class="'comment-level-' + comment.level" v-if="isClosed" @click="isClosed=false">Открыть комментарий
        </button>
        <div class="comment" @mouseenter="showHideButton" @mouseleave="hideHideButton"
             :class="'comment-level-' + comment.level" v-else>
            <div class="comment-avatar" :class="{collapsed: comment.hidden}">
                <img src="../assets/empty-avatar.png" :class="{collapsed: comment.hidden}" alt="avatar">
            </div>
            <div class="comment-body">
                <div class="comment-body-nav">
                    <router-link class="comment-body-nav-name" to="/">{{ comment.userName }}</router-link>
                    <div class="comment-body-nav-time">{{timeFromNow}}</div>
                    <div class="comment-body-nav-vote">
                        <button @click="increaseRating(comment.id)">+</button>
                        <button>{{ comment.rating }}</button>
                        <button @click="decreaseRating(comment.id)">-</button>
                    </div>
                    <div class="comment-body-nav-hide" @click="hideComment(comment.id)" :style="isHideVisible?'visibility: hidden':''">{{comment.hidden?'Раскрыть':'Скрыть'}}</div>
                    <div class="comment-body-nav-reply" @click="isReplying = !isReplying">Ответить</div>
                </div>
                <div class="comment-body-text">
                    <slot v-if="!comment.hidden"></slot>
                </div>
            </div>
        </div>
        <comment-form @commentSent="isReplying=false" v-if="isReplying"
                      :class="'comment-level-' + comment.level"
                      :reply-to="comment.id"></comment-form>
    </div>
</template>

<script>
    import CommentForm from "./CommentForm";

    export default {
        name: "CommentTemplate",
        components: {
            CommentForm
        },
        computed: {
            timeFromNow() {
                let seconds = Math.floor((this.time - this.comment.timeStamp) / 1000);
                let minutes = Math.floor(seconds / 60);
                let hours = Math.floor(minutes / 60);
                let days = Math.floor(hours / 24);
                if (days > 0) {
                    return days + ' дней назад'
                } else if (hours > 0) {
                    return hours + ' часов назад'
                } else {
                    return minutes + ' минут назад'
                }
            }
        },
        data() {
            return {
                isClosed: false,
                isReplying: false,
                isHideVisible: true
            }
        },
        methods: {
            hideComment(id){
                this.$store.commit('hideComment', id)
            },
            showHideButton() {
                this.isHideVisible = false
            },
            hideHideButton() {
                this.isHideVisible = true
            },
            increaseRating(id) {
                this.$store.commit('increment', id)
            },
            decreaseRating(id) {
                this.$store.commit('decrement', id);
                if (this.comment.rating < -10) {
                    this.isClosed = true
                }
            }
        },
        mounted() {
            if (this.comment.rating < -10) {
                this.isClosed = true
            }
        },
        props: {
            comment: {
                type: Object,
                default: () => []
            },
            time: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style scoped>

</style>