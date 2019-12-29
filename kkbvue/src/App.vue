<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <transition name="route-move">
            <router-view class="test"/>
        </transition>
    </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    .route-move-enter {
        transform: translate3d(-100%, 0, 0);
    }

    .route-move-leave-to {
        transform: translate3d(100%, 0, 0);
    }

    .route-move-enter-active, .route-move-leave-active {
        transition: transform .6s;
    }

    .test {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 100px;
        left: 0;
    }

</style>
