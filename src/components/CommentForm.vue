<template>
    <div class="addComment">
        <div style="color:red" v-for="error in errors" v-bind:key="error">{{error}}</div>
        <form action="">
            <fieldset>
                <legend>Добавить комментарий</legend>
                <label for="name"> Имя </label>
                <input id="name" v-model="name" type="text">
                <label for="email"> E-mail </label>
                <input id="email" v-model="email" type="text">
                <label for="commentText"> Текст комментария </label>
                <textarea name="CommentText" id="commentText" v-model="commentText" cols="100" rows="7">
                </textarea>
                <button @click="checkForm">Добавить комментарий</button>
            </fieldset>
        </form>
    </div>
</template>

<script>
    export default {
        name: "CommentForm",
        data() {
            return {
                name: '',
                email: '',
                commentText: '',
                errors: []
            }
        },
        methods: {
            checkForm(e) {
                e.preventDefault();
                this.errors = [];

                if (!this.name) {
                    this.errors.push('Требуется указать имя.');
                }
                if (!/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(this.email)) {
                    this.errors.push('Требуется указать правильную почту.');
                }
                if (!this.commentText) {
                    this.errors.push('Требуется указать текст комментария.');
                }
                //
                if (this.errors.length < 1) {
                    this.postComment()
                }
            },
            postComment() {
                console.log('ok')
            }

        }
    }
</script>

<style scoped>

</style>