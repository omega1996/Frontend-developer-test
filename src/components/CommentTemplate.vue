<template>
    <div>
        <button :class="'comment-level-'+comment.level" v-if="badKarma">Показать комментарий</button>
        <div class="comment" :class="'comment-level-'+comment.level" v-else>
            <div class="comment-avatar">
                <img src="../assets/empty-avatar.png" alt="avatar">
            </div>
            <div class="comment-body">
                <div class="comment-body-nav">
                    <router-link class="comment-body-nav-name" to="/">{{ comment.userName }}</router-link>
                    <div class="comment-body-nav-time">Час назад</div>
                    <div class="comment-body-nav-vote">
                        <button>+</button>
                        <button>{{ comment.rating }}</button>
                        <button>-</button>
                    </div>
                    <div class="comment-body-nav-reply">Ответить</div>
                </div>
                <div class="comment-body-text">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommentTemplate",
    computed: {
        badKarma() {
            return this.comment.rating < -10
        }
    },
    props: {
        comment:{
            type: Object,
            default: ()=>[]
        }
    }
}
</script>

<style scoped>

</style>