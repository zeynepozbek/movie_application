<template>
  <b-container>
    <h3 class="mt-5" v-show="listType === 'popular'">Popular Movies</h3>
    <h3 class="mt-5" v-show="listType === 'top_rated'">Top Rated Movies</h3>
    <b-row>
      <div class="card" v-for="item in movies">
        <div class="wrapper" v-bind:style="{ backgroundImage: 'url(' + 'https://www.themoviedb.org/t/p/w220_and_h330_face/' +  item.poster_path + ')' }">
          <div class="header">
            <div class="date">
              <span class="day">{{ item.newDay }}</span>
              <span class="month">{{item.newMonth}}</span>
              <span class="year">{{item.newYear}}</span>
            </div>
          </div>
          <div class="data">
            <div class="content">
              <span class="author">{{item.vote_average}} / 10</span>
              <h1 class="title"><a href="#">{{item.title}}</a></h1>
              <a href="#" class="button">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import api from '../api'

export default {
  props: {
    listType: String
  },
  data() {
    return {
      isLoading: true,
      movies: []
    }
  },
  methods: {
    doQuery(){

      let urlDetail = '3/movie/'+ this.listType;

      let data = {}

      var that = this;

      api.get(data, urlDetail)
        .then((response) => {
          that.movies = response.data.results;

          for (let i in that.movies) {
            var fullDate = that.movies[i].release_date.split("-")
            let date = new Date(fullDate[0], fullDate[1], fullDate[2]);
            let newMonth = date.toLocaleString('en-us', { month: 'short' });
            let newYear = date.getFullYear();
            let newDay = date.getDate();
            that.movies[i].newMonth = newMonth;
            that.movies[i].newYear = newYear;
            that.movies[i].newDay = newDay;
          }
        })
        .catch((error)   => {
        })

    },
  },
  created() {
    this.doQuery();
  }
}
</script>

<style lang="scss">
$regal-blue: #034378;
$san-juan: #2d4e68;
$bermuda: #77d7b9;
$white: #fff;
$black: #000;
$open-sans: 'Open Sans', sans-serif;
@mixin cf {
  &::before,
  &::after {
    content: '';
    display: table;
  }
  &::after {
    clear: both;
  }
}

.card {
  float: left;
  padding: 0;
  width: 15%;
  margin: 10px;
  background-color: rgba(255,255,255,.5);

  .header {
    @include cf;
    color: $white;
    padding: 1em;
    .date {
      float: left;
      font-size: 12px;
      font-weight: 600;
      background: rgba(0,0,0,.5);
      padding: 2px;
      border-radius: 0.25rem;
    }
  }
  .button {
    display: block;
    width: 100px;
    margin: 2em auto 1em;
    text-align: center;
    font-size: 12px;
    color: $white;
    line-height: 1;
    position: relative;
    font-weight: 700;
    &::after {
      content: '\2192';
      opacity: 0;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      transition: all 0.3s;
    }
    &:hover {
      &::after {
        transform: translate(5px, -50%);
        opacity: 1;
      }
    }
  }

  .menu-content {
    float: right;
    @include cf;
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      display: inline-block;
      margin: 0 5px;
      position: relative;
    }
    a {
      color: $white;
    }
    span {
      position: absolute;
      left: 50%;
      top: 0;
      font-size: 10px;
      font-weight: 700;
      font-family: 'Open Sans';
      transform: translate(-50%, 0);
      transition: all 0.3s;
      opacity: 0;
    }
  }
  .wrapper {
    background-color: $white;
    min-height: 300px;
    position: relative;
    overflow: hidden;
    border-radius: 0.25rem;
    background: url(https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg) center / cover no-repeat;
    box-shadow: inset 0px -100px 25px 0px rgba(0,0,0,0.75);

    &:hover {
      .data {
        transform: translateY(0);
      }
      .menu-content {
        span {
          transform: translate(-50%, -10px);
          opacity: 1;
        }
      }
    }
  }
  .data {
    position: absolute;
    bottom: 0;
    width: 100%;
    transition: transform 0.3s;
    color: $white;
    transform: translateY(calc(70px + -1em));
    .content {
    padding: 1em;
    position: relative;
    z-index: 1;
  }
  }
  .author {
    font-size: 12px;
    font-weight: 600;
  }
  .title {
    margin-top: 10px;
    font-size: 1rem;
    a {
      color: $white;
      font-weight: 600;
    }
  }
  .text {
    height: 70px;
    margin: 0;
  }
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox']:checked + .menu-content {
    transform: translateY(-60px);
  }
}
</style>
