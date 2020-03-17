<template>
    <div class="comment" :class="'comment-level-'+level">
        <div class="comment-avatar">
            <img src="../assets/empty-avatar.png" alt="avatar">
        </div>
        <div class="comment-body">
            <div class="comment-body-nav">
                <router-link class="comment-body-nav-name" to="/">Lorem ipsum.</router-link>
                <div class="comment-body-nav-time">Час назад</div>
                <div class="comment-body-nav-vote">
                    <button>+</button>
                    <button>+1</button>
                    <button>-</button>
                </div>
                <div class="comment-body-nav-reply">Ответить</div>
            </div>
            <div class="comment-body-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea earum eius optio sapiente.
                Aliquid asperiores deleniti ipsa repellendus sint! Adipisci amet dolor dolore dolores ea
                exercitationem id impedit itaque iure labore nemo nesciunt nihil nulla odit possimus quod quos
                tempora, vitae voluptates voluptatibus. Beatae deserunt ducimus nam quas sed. Adipisci cumque
                dignissimos ducimus eaque eius enim expedita fugiat labore odio optio rem reprehenderit rerum unde
                voluptatem, voluptatibus. Accusamus amet culpa dolor dolores id laboriosam nesciunt placeat quod
                tempora vitae! Aliquam animi commodi deleniti dolor earum, ex illum iste laborum minus, numquam
                quidem quo rerum suscipit totam voluptas! Atque, dignissimos eius!
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
            }
        }
    }
</script>

<style scoped>

</style>