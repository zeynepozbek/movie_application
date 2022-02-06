<template>
  <div id="app" class="container mx-auto pt-4">
    <headerApp></headerApp>
    <footerApp></footerApp>
  </div>
</template>

<script>
import headerApp from './components/header.vue'
import footerApp from './components/footer.vue'

import api from './api'

export default {
  name: 'app',

  components: {
    headerApp,
    footerApp
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
