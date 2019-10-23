import React from 'react'
import axios from 'axios'

export default class AjaxComponent extends React.Component {

    state = {
        name: '',
        repoUrl: ''
    }

    componentDidMount() {
        axios.get('https://api.github.com/search/repositories?q=r&sort=stars').then(res => {
            const {name, html_url} = res.data.items[0]
            this.setState({name, repoUrl: html_url})
        })
    }

    render() {
        const {name, repoUrl} = this.state
        if (!name) {
            return (
                <div>
                    loading
                </div>
            )
        } else {
            return (
                <div>
                    most star repo is <a href={repoUrl}>{name}</a>
                </div>
            )
        }
    }
}
