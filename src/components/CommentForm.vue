<template>
    <div class="addComment">
        <form action="">
            <fieldset>
                <legend>Добавить комментарий</legend>
                <label for="name"> Имя </label>
                <input id="name" type="text">
                <label for="email"> E-mail </label>
                <input id="email" type="text">

                <label for="commentText"> Текст комментария </label>
                <textarea name="CommentText" id="commentText" cols="100" rows="7">
                </textarea>
                <button>Добавить комментарий</button>
            </fieldset>
        </form>
    </div>
</template>

<script>
    export default {
        name: "CommentForm"
    }
</script>

<style scoped>

</style>