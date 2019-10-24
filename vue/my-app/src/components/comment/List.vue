<template>
    <ul>
        <li v-show="comments.length===0">暂无评论</li>
        <Item v-for="(comment,index) in comments"
              :comment="comment"
              :delComment="delComment"
              :index="index"
              :key="index"/>
    </ul>
</template>

<script>
    import Item from './Item'

    export default {
        props: ['comments', 'delComment'],
        components: {
            Item
        }
    }
</script>

<style scoped>

</style>
