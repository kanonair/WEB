<template>
    <div>
        <p>Messages</p>
        <ul>
            <li v-for="(message,index) in messages" :key="index">
                <router-link :to="`/home/messages/detail/${message.id}`">{{message.title}}</router-link>
                <button @click="push(message.id)">push</button>
                <button @click="replace(message.id)">replace</button>
            </li>
        </ul>
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
    // this.$router.back()
    export default {
        data() {
            return {
                messages: [
                    {id: 1, title: 'Taylor'},
                    {id: 2, title: 'Air'}
                ]
            }
        },
        methods: {
            push(id) {
                this.$router.push(`/home/messages/detail/${id}`)
            },
            replace(id) {
                this.$router.replace(`/home/messages/detail/${id}`)
            }
        }
    }
</script>

<style scoped>

</style>
