<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button @click="handlerLogout">注销</button>
    </div>
</template>
<script>
    export default {
        methods: {
            handlerLogout() {
                this.$store.dispatch('logout')
            }
        }
    }
</script>