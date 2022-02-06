<template>
  <div id="app">
    <headerApp></headerApp>
    <div class="content-body">
      <jumbotronApp></jumbotronApp>
      <movieList :listType="'popular'"></movieList>
      <movieList :listType="'top_rated'"></movieList>
      <footerApp></footerApp>
    </div>
  </div>
</template>

<script>
import headerApp from './components/header.vue'
import footerApp from './components/footer.vue'
import jumbotronApp from './components/jumbotron.vue'
import movieList from './components/list.vue'



export default {
  name: 'app',

  components: {
    headerApp,
    footerApp,
    jumbotronApp,
    movieList
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
