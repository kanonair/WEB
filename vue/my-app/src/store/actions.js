import {INCREMENT, DECREMENT} from './action-types'

export default {
    increment({commit}, data) {
        commit(INCREMENT, {data})
    },
    decrement({commit}, data) {
        commit(DECREMENT, {data})
    },
    incrementIfOdd({commit, state}, data) {
        state.count % 2 || commit(INCREMENT, {data})
    },
    incrementAsync({commit}, data) {
        setTimeout(() => commit(INCREMENT, {data}), 1000)
    }
}
