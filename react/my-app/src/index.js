import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import CommentComponent from './comment'
import AjaxComponent from './ajax'
import Spa from './spa'
import Antui from './antui'
import ReduxComponent from './redux'

import store from './redux/store'

ReactDOM.render(<CommentComponent/>, document.getElementById('root01'))
ReactDOM.render(<AjaxComponent/>, document.getElementById('root02'))
ReactDOM.render(<BrowserRouter><Spa/></BrowserRouter>, document.getElementById('root03'))
ReactDOM.render(<Antui/>, document.getElementById('root04'))
ReactDOM.render(<ReduxComponent store={store}/>, document.getElementById('root05'))
store.subscribe(() => ReactDOM.render(<ReduxComponent store={store}/>, document.getElementById('root05')))
