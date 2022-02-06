<template>
  <div id="app">
    <headerApp></headerApp>
    <div class="content-body">
      <router-view></router-view>
      <footerApp></footerApp>
    </div>
  </div>
</template>

<script>
import headerApp from './components/header.vue'
import footerApp from './components/footer.vue'

export default {
  name: 'app',

  components: {
    headerApp,
    footerApp,
  },
  data() {
    return {
    }
  },
}
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  background: #000;
  color: #999;
}

.content-body {
  padding: 110px 0;
}

ul {
  list-style: none;
}

h1,
h2,
h3,
h4 {
  color: #fff;
}

a {
  color: #fff;
  text-decoration: none;
}
</style>
