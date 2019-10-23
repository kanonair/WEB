import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {counter} from './reducers'

export default createStore(counter, applyMiddleware(thunk))
