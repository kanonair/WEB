<template>
    <div>
        <p>clicked {{count}} times count is {{evenOrOdd}}</p>
        <mt-button @click="increment(1)" type="primary" plain>+</mt-button>
        <mt-button @click="decrement(1)" type="primary" plain>-</mt-button>
        <mt-button @click="incrementIfOdd(1)" type="primary" plain>increment if odd</mt-button>
        <mt-button @click="incrementAsync(1)" type="primary" plain>increment async</mt-button>
    </div>
</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapState(['count']),
            ...mapGetters(['evenOrOdd'])
        },
        methods: {
            ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
        }
    }
</script>

<style scoped>

</style>
