import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import CommentComponent from './comment'
import AjaxComponent from './ajax'
import Spa from './spa'

ReactDOM.render(<CommentComponent/>, document.getElementById('root01'))
ReactDOM.render(<AjaxComponent/>, document.getElementById('root02'))
ReactDOM.render(<BrowserRouter><Spa/></BrowserRouter>, document.getElementById('root03'))
