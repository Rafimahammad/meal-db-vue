<template>
    <div class="app-header">
        <b-navbar toggleable="md" type="dark" fixed="top" id="Header">
            <router-link to="/"><img src="../assets/logo-small.png"></router-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav class="app-navs">
                <b-navbar-nav>
                    <router-link id="homeroute" to="/">Home</router-link>
                    <router-link id="searchroute" to="/search">Search</router-link>
                    <router-link id="aboutroute" to="/about">About</router-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'AppHeader',

}
</script>

<style scoped>


#Header{
    position: relative;
    background-color: #23180d;
}

.app-navs{
   justify-content: center;
}

a {
  color: #5c6268;
  margin: 4px;
}
a:hover {
  color: #b2b5b8;
  text-decoration: none;
}
.router-link-exact-active {
  color: #ffffff;
}
#brand {
  color: rgb(221, 25, 25);
}
</style>