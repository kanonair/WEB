import React from 'react'
import PropTypes from 'prop-types'

export default class CommentComponent extends React.Component {

    state = {
        comments: []
    }

    addComment = comment => {
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }

    delComment = index => {
        const {comments} = this.state
        comments.splice(index, 1)
        this.setState({comments})
    }

    render() {
        return (
            <div>
                <h3>请发表对React的评论</h3>
                <AddComponent addComment={this.addComment}/>
                <ListComponent delComment={this.delComment} comments={this.state.comments}/>
            </div>
        )
    }
}

class AddComponent extends React.Component {

    static propTypes = {
        addComment: PropTypes.func.isRequired
    }

    state = {
        comment: {username: '', content: ''}
    }

    handlerChange = (e, key) => {
        const {comment} = this.state
        comment[key] = e.target.value
        this.setState({comment})
    }

    addComment = e => {
        const {username, content} = this.state.comment
        this.props.addComment({username, content})
        e.preventDefault()
    }

    render() {
        const {username, content} = this.state.comment
        return (
            <form onSubmit={this.addComment}>
                <input onChange={e => this.handlerChange(e, 'username')} value={username} placeholder='用户名'/>
                <input onChange={e => this.handlerChange(e, 'content')} value={content} placeholder='内容'/>
                <input type="submit"/>
            </form>
        )
    }
}

class ListComponent extends React.Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
        delComment: PropTypes.func.isRequired
    }

    render() {
        if (this.props.comments.length) {
            return (
                <ul>
                    {this.props.comments.map((comment, index) => <ItemComponent delComment={this.props.delComment}
                                                                                comment={comment} index={index}
                                                                                key={index}/>)}
                </ul>
            )
        } else {
            return (<div>暂无评论</div>)
        }

    }
}

class ItemComponent extends React.Component {

    static propTypes = {
        comment: PropTypes.object.isRequired,
        delComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    }

    render() {
        const {comment} = this.props
        return (
            <li>
                {comment.username}说：{comment.content}
                <button onClick={() => this.props.delComment(this.props.index)}>删除</button>
            </li>
        )
    }
}
