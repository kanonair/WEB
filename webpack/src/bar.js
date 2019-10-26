export default (logo) => {
    document.getElementById('logo').src = logo
    console.log(process.env.NODE_ENV)
}
