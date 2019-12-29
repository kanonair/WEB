<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <button v-if="$store.state.isLogin" @click="test">测试</button>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    import axios from 'axios'

    export default {
        name: 'home',
        components: {
            HelloWorld
        },
        methods: {
            test() {
                axios.get('/api/userinfo').then(res => {
                    window.console.log(res.data)
                }).catch(error => {
                    window.console.log(error.response.data.message)
                })
            }
        }
    }
</script>
