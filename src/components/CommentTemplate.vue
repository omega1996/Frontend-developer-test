<template>
    <div class="comment" :class="'comment-level-'+level">
        <div class="comment-avatar">
            <img src="../assets/empty-avatar.png" alt="avatar">
        </div>
        <div class="comment-body">
            <div class="comment-body-nav">
                <router-link class="comment-body-nav-name" to="/">{{ authorName }}</router-link>
                <div class="comment-body-nav-time">Час назад</div>
                <div class="comment-body-nav-vote">
                    <button>+</button>
                    <button>{{ rating }}</button>
                    <button>-</button>
                </div>
                <div class="comment-body-nav-reply">Ответить</div>
            </div>
            <div class="comment-body-text">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommentTemplate",
    props:{
        level: {
            type: Number,
            default: 0
        },
        authorName: {
            type: String,
            default: ''
        },
        rating: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>

</style>