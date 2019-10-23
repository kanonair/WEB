import {INCREMENT, DECREMENT} from './action-types'

//同步返回对象
export const increment = (number) => ({type: INCREMENT, data: number})

export const decrement = (number) => ({type: DECREMENT, data: number})

//异步返回函数
export const incrementAsync = (number) => {
    return dispatch => {
        //异步代码
        setTimeout(() => {
            dispatch(increment(number))
        }, 1000)
    }
}
