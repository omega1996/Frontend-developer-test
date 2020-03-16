<template>
    <div> Добавить комментарий
        <form action="">
            <label> Имя
                <input type="text">
            </label>
            <label> E-mail
                <input type="text">
            </label>
            <label> Текст комментария
                <textarea name="CommentText" id="" cols="30" rows="10">
                </textarea>
            </label>
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