import axios from 'axios'

export default function (vm) {
    axios.interceptors.request.use(config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.token = token
        }
        return config
    })
    axios.interceptors.response.use(null, error => {
        if (error.response.status === 401) {
            vm.$store.dispatch('logout')
            vm.$router.push('/login')
        }
        return Promise.reject(error)
    })
}
