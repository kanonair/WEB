import React from 'react'
import * as actions from './redux/actions'

export default class ReduxComponent extends React.Component {

    increment = () => {
        this.props.store.dispatch(actions.increment(this.select.value * 1))
    }

    decrement = () => {
        this.props.store.dispatch(actions.decrement(this.select.value * 1))
    }

    incrementIfOdd = () => {
        const count = this.props.store.getState()
        if (count % 2 === 1) {
            this.increment()
        }
    }

    incrementAsync = () => {
        setTimeout(() => {
            this.increment()
        }, 1000)
    }

    render() {
        const count = this.props.store.getState()
        return (
            <div>
                click {count} times
                <select ref={select => this.select = select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>increment if odd</button>
                <button onClick={this.incrementAsync}>increment async</button>
            </div>
        )
    }
}
