import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {increment, decrement, incrementAsync} from './redux/actions'

class ReduxComponent extends React.Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        incrementAsync: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    }

    increment = () => {
        this.props.increment(this.select.value * 1)
    }

    decrement = () => {
        this.props.decrement(this.select.value * 1)
    }

    incrementIfOdd = () => {
        const count = this.props.count
        if (count % 2 === 1) {
            this.increment()
        }
    }

    incrementAsync = () => {
        this.props.incrementAsync(this.select.value * 1)
    }

    render() {
        const count = this.props.count
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

export default connect(
    state => ({count: state}),
    {increment, decrement, incrementAsync}
)(ReduxComponent)
