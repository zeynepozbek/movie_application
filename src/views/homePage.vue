<template>
  <div>
    <jumbotronApp></jumbotronApp>
    <movieList :listType="'popular'"></movieList>
    <movieList :listType="'top_rated'"></movieList>
  </div>
</template>

<script>
import jumbotronApp from '../components/jumbotron.vue'
import movieList from '../components/list.vue'

export default {

  components: {
    jumbotronApp,
    movieList
  }

}
</script>
