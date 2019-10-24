import {INCREMENT, DECREMENT} from './action-types'

export default {
    [INCREMENT](state, {data}) {
        state.count += data
    },
    [DECREMENT](state, {data}) {
        state.count -= data
    }
}
