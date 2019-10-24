<template>
    <div>
        <h3>请发表对Vue的评论</h3>
<!--        <Add :addComment="addComment"/>-->
        <Add @addComment="addComment"/>
        <List :comments="comments" :delComment="delComment"/>
    </div>
</template>

<script>
    import Add from './Add'
    import List from './List'

    export default {
        data() {
            return {
                comments: []
            }
        },
        components: {
            Add,
            List
        },
        methods: {
            delComment(index) {
                this.comments.splice(index, 1)
            },
            addComment(comment) {
                this.comments.unshift(comment)
            }
        }
    }
</script>

<style scoped>

</style>
