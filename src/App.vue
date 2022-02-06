<template>
  <div id="app">
    <headerApp></headerApp>
    <div class="content-body">
      <jumbotronApp></jumbotronApp>
      <footerApp></footerApp>
    </div>
  </div>
</template>

<script>
import headerApp from './components/header.vue'
import footerApp from './components/footer.vue'
import jumbotronApp from './components/jumbotron.vue'

import api from './api'

export default {
  name: 'app',

  components: {
    headerApp,
    footerApp,
    jumbotronApp
  },
  data() {
    return {
      isLoading: true,
      movies: []
    }
  },
  methods: {
    doQuery(){
      let urlDetail = '3/movie/550';

      let data = {}

      api.get(data, urlDetail)
        .then((response) => {
          console.log('response',response)
        })
        .catch((error)   => {
        })

    },
    handleSearch(query) {
      this.movies = [];
      this.isLoading = true;

      const url = `http://api.themoviedb.org/3/search/movie?api_key=991a7a0c3af8aa6c10fd25900f3ef364&query=${query}`;
      this.doQuery(url);
    }
  },
  created() {
    this.doQuery();
  }
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
