<template>
    <form @submit.prevent="handlerAddComment">
        <input v-model="username">
        <input v-model="content">
        <input type="submit">
    </form>
</template>

<script>
    export default {
        // props: {
        //     addComment: {
        //         type: Function,
        //         required: true
        //     }
        // },
        data() {
            return {
                username: '',
                content: ''
            }
        },
        methods: {
            handlerAddComment() {
                const {username, content} = this
                this.$emit('addComment', {username, content})
            }
        }
    }
</script>

<style scoped>

</style>
