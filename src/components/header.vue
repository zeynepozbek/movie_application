<template>
  <div class="header-content">
    <header class="container">
      <div class="logo">
        <router-link to="/" id="logo">
          MOVIE
        </router-link>
      </div>
      <nav class="main-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
      <div class="mobile-menu">
        <b-button v-b-toggle.sidebar-1>Menu</b-button>
        <b-sidebar id="sidebar-1" title="Movie" shadow>
          <div class="px-3 py-2">
            <nav>
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
            </nav>
          </div>
        </b-sidebar>
      </div>
    </header>
    <!--    -->
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

.mobile-menu {
  display: none;

  .b-sidebar {
    background-color: black !important;
  }

  .b-sidebar-header {
    border-bottom: 1px solid rgba(255,255,255,.5)
  }

  strong {
    color: #E50914;
  }

  nav {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: column;
  }

  .close {
    background: transparent;
    color: white !important;
    box-shadow: none !important;
    border: none !important;
  }

  .router-link-active {
    float: left;
    width: 100%;
    margin: 12px 0;
  }
}

@media only screen and (max-width: 768px) {
  .main-nav {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
}

</style>

