<template>
    <li>
        {{comment.username}}说：{{comment.content}}
        <button @click="handlerDelComment">删除</button>
    </li>
</template>

<script>
    export default {
        props: {
            comment: Object,
            index: Number,
            delComment: Function
        },
        methods: {
            handlerDelComment() {
                this.delComment(this.index)
            }
        }
    }
</script>

<style scoped>

</style>
