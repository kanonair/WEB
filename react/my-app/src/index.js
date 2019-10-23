import React from 'react'
import ReactDOM from 'react-dom'
import CommentComponent from './comment'
import AjaxComponent from './ajax'

ReactDOM.render(<CommentComponent/>, document.getElementById('root01'))
ReactDOM.render(<AjaxComponent/>, document.getElementById('root02'))
