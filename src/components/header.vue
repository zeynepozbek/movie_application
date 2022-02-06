<template>
  <div class="header-content">
    <header class="container">
      <div class="logo">
        <a id="logo" href="#home">
          MOVIE
        </a>
      </div>
      <nav class="main-nav">
        <a href="#home">Home</a>
        <a href="#tvShows">About</a>
      </nav>
    </header>
    <!--    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
        <b-sidebar id="sidebar-1" title="Sidebar" shadow>
          <div class="px-3 py-2">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
          </div>
        </b-sidebar>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">

/* CSS VARIABLES */
:root {
  --primary: #000;
  --light: #F3F3F3;
  --dark: 	#686868;
}

.header-content {
  padding: 20px 20px 0 20px;
  position: fixed;
  top: 0;
  display: flex;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary);
  width: 100%;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.logo {
  grid-area: nt;
  object-fit: cover;
  width: 182px;
  max-height: 100%;
}

.logo img {
  height: 35px;
}

#logo {
  color: #E50914;
  font-weight: bold;
  font-size: 48px;
  margin: 0;
  padding: 0;
}


.main-nav {
  grid-area: mn;
  padding: 0 30px 0 20px;
}

.main-nav a {
  color: var(--light);
  text-decoration: none;
  margin: 5px;
}

.main-nav a:hover {
  color: var(--dark);
}

.sub-nav {
  grid-area: sb;
  padding: 0 40px 0 40px;
}

.sub-nav a {
  color: var(--light);
  text-decoration: none;
  margin: 5px;
}

.sub-nav a:hover {
  color: var(--dark);
}
</style>

