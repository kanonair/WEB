<template>
    <div>
        <cube-input v-model="user.username"/>
        <cube-input v-model="user.password"/>
        <cube-button @click="handlerLogin">登陆</cube-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            handlerLogin() {
                this.$store
                    .dispatch('login', this.user)
                    .then(code => {
                        if (code) {
                            //ok
                            this.$router.push(
                                this.$route.query.redirect || '/'
                            )
                        }
                    }).catch(error => {
                    this.$createToast({
                        time: 2000,
                        txt: error.response.data.message,
                        type: 'error'
                    }).show()
                })
            }
        }
    }
</script>

<style scoped>

</style>