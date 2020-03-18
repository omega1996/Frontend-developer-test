<template>
    <div>
        <button :class="'comment-level-'+comment.level" v-if="isClosed">Открыть комментарий</button>
        <div class="comment" :class="'comment-level-'+comment.level" v-else>
            <div class="comment-avatar">
                <img src="../assets/empty-avatar.png" alt="avatar">
            </div>
            <div class="comment-body">
                <div class="comment-body-nav">
                    <router-link class="comment-body-nav-name" to="/">{{ comment.userName }}</router-link>
                    <div class="comment-body-nav-time">Час назад</div>
                    <div class="comment-body-nav-vote">
                        <button @click="increaseRating(comment.id)" >+</button>
                        <button>{{ comment.rating }}</button>
                        <button @click="decreaseRating(comment.id)">-</button>
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

    data(){
        return {
            isClosed: false
        }
    },
    methods:{
        increaseRating(id){
            this.$store.commit('increment', id)
        },
        decreaseRating(id){
            this.$store.commit('decrement', id)
        }
    },
    mounted () {
        if(this.comment.rating<-10){
            this.isClosed = true
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