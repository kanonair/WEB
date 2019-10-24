<template>
    <div>
        <Comment/>
        <SlotDemo><h3 slot="center">中</h3></SlotDemo>
        <SlotDemo><h3 slot="center">center</h3></SlotDemo>
        <mt-button>按钮</mt-button>
        <router-link to="/about">About</router-link>
        <router-link to="/home">Home</router-link>
        <router-view/>
        <VuexDemo/>
    </div>
</template>

<script>

    // 组件通信
    // props: ['comments']
    // props: {comment: Object,index: Number, delComment: Function}
    // props: {addComment: {type: Function,required: true}}

    // 自定义事件
    // <Add @addComment="addComment"/>
    // this.$emit('addComment', {username, content})

    import Comment from './components/comment/Comment'

    import SlotDemo from './components/slot/SlotDemo'

    import VuexDemo from './components/vuex/VuexDemo'

    import axios from 'axios'

    export default {
        components: {
            Comment,
            SlotDemo,
            VuexDemo
        },
        mounted() {
            axios.get('http://192.168.1.119:8080/').then(res => {
                window.console.log(res.data)
            })
        }
    }
</script>

<style>

</style>
