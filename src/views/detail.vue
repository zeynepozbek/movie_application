<template>
  <b-container>
    <div class="movie-content">
      <div class="movie-poster">
        <img :src="'https://www.themoviedb.org/t/p/w220_and_h330_face/' + movieDetail.poster_path" alt="">
      </div>
      <div class="movie-detail">
        <h3 class="w-full">{{movieDetail.original_title}} ({{movieDetail.newYear}})</h3>
        <div class="w-full mt-2 mb-2 flex">
          <span v-for="item in movieDetail.genres">
            {{item.name}},
          </span>
        </div>
        <div class="w-full flex">
          <span class="score">{{movieDetail.vote_average}}</span>
          <span class="score-text">User Score</span>
        </div>
        <i class="tag-line">{{movieDetail.tagline}}</i>
        <div class="w-full">
          <h5>Overview</h5>
          <p>{{movieDetail.overview}}</p>
        </div>
        <div class="tag-list">
          <h5>Keywords</h5>
          <span class="tag" v-for="key in keywordList">{{key.name}}</span>
        </div>
      </div>
    </div>
    <div class="cast-content">
      <h5>Top Billed Cast</h5>
      <div class="cast-list">
        <b-card
          v-for="cast in castList"
          :img-src="'https://www.themoviedb.org/t/p/w138_and_h175_face/' + cast.profile_path"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
          <b-card-text>
            <h5 class="title">{{cast.original_name}}</h5>
            <p class="desc">{{cast.character}}</p>
          </b-card-text>
        </b-card>
<!--        <div class="view-more">
          View More >
        </div>-->
      </div>
    </div>
    <div class="cast-content">
      <h5>Top Crew</h5>
      <div class="cast-list">
        <b-card
          v-for="crew in crewList"
          :img-src="'https://www.themoviedb.org/t/p/w138_and_h175_face/' + crew.profile_path"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
          <b-card-text>
            <h5 class="title">{{crew.original_name}}</h5>
            <p class="desc">{{crew.character}}</p>
          </b-card-text>
        </b-card>
<!--        <div class="view-more">
          View More >
        </div>-->
      </div>
    </div>
    <div class="w-full mt-5">
      <h5>Trailer</h5>
      <iframe width="1280" height="720" :src="'https://www.youtube.com/embed/' + trailerKey" title="YouTube video player"
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </b-container>
</template>

<script>
import api from "../api";

export default  {
  data() {
    return {
      id: null,
      movieDetail: null,
      castList: null,
      castFullList: null,
      crewList: null,
      crewFullList: null,
      keywordList: null,
      trailerKey: '',
    }
  },
  mounted() {
    let urlDetail = this.$route;
    this.id= urlDetail.query.id
    this.getDetail(this.id);
    this.getCredits(this.id);
    this.getKeyword(this.id);
    this.getVideos(this.id);
  },
  methods: {
    getDetail(id) {
      let urlDetail = '3/movie/'+ id;

      let data = {}

      var that = this;

      api.get(data, urlDetail)
        .then((response) => {
          that.movieDetail = response.data;

          var fullDate = that.movieDetail.release_date.split("-")
          let date = new Date(fullDate[0], fullDate[1], fullDate[2]);
          let newMonth = date.toLocaleString('en-us', { month: 'short' });
          let newYear = date.getFullYear();
          let newDay = date.getDate();
          that.movieDetail.newMonth = newMonth;
          that.movieDetail.newYear = newYear;
          that.movieDetail.newDay = newDay;

        })
        .catch((error)   => {
        })
    },
    getCredits(id) {
      let urlDetail = '3/movie/'+ id + '/credits';
      let data = {}

      var that = this;

      api.get(data, urlDetail)
        .then((response) => {
          that.castFullList = response.data.cast;
          that.crewFullList = response.data.crew;

          that.castList = that.castFullList.slice(0, 9);
          that.crewList = that.crewFullList.slice(0, 9);

        })
        .catch((error)   => {
        })
    },
    getKeyword(id) {
      let urlDetail = '3/movie/'+ id + '/keywords';
      let data = {}

      var that = this;

      api.get(data, urlDetail)
        .then((response) => {
          that.keywordList = response.data.keywords
        })
        .catch((error)   => {
        })
    },
    getVideos(id) {
      let urlDetail = '3/movie/'+ id + '/videos';
      let data = {}

      var that = this;

      api.get(data, urlDetail)
        .then((response) => {
          let list = response.data.results;
          for (let i in list) {
            if(list[i].type === 'Trailer') {
              that.trailerKey = list[i].key
            }
            else {
              that.trailerKey = list[0].key
            }
          }
        })
        .catch((error)   => {
        })
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
h5 {
  float: left;
  width: 100%;
  color: white;
}

.movie-content {
  display: flex;
  float: left;
  width: 100%;
  margin-top: 16px;

  .movie-detail {
    margin-left: 16px;
  }
}

.cast-content {
  margin-top: 32px;
  float: left;
  width: 100%;

  h5 {
    color: white;
  }
}

.cast-list {
  display: flex;
  width: 100%;
  overflow: auto;

  .card {
    width: 142px;
    min-width: 142px;
    margin: 10px;

    &-body {
      padding-bottom: 0 !important;
      background: white;
    }
  }

  img {
    min-width: 138px;
    width: 138px;
    height: 175px;
  }

  .title {
    font-size: 16px;
    color: #000000;
    font-weight: bold;
  }

  .desc {
    color: #000000;
    font-size: 14px;
  }
}

.view-more {
  min-width: 142px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10%;
  color: #E50914;
  font-weight: bold;
}

.tag-list {
  float: left;
  width: 100%;
  display: flex;
  flex-flow: wrap;

  .tag {
    background-color: rgba(255, 255, 255, 0.5) !important;
    color: #000;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 13px;
    margin: 4px;
  }
}

.tag-line {
  margin: 16px 0;
  float: left;
  width: 100%;
  color: white;
}

.score {
  background: #6ed17b;
  padding: 4px;
  border-radius: 100%;
  width: 40px;
  min-width: 40px;
  height: 40px;
  max-height: 40px;
  float: left;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 4px;
}

.score-text {
  color: white;
}

.play-trailer {
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 8px;
  float: left;
  width: 100%;
}

.w-full {
  float: left;
  width: 100%;
}
.flex {
  display: flex;
  align-items: center;
}
</style>
