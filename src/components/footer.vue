<template>
  <b-container class="container">
    <section class="link">
      <div class="logos">
        <a href="#"><i class="fab fa-facebook-square fa-2x logo"></i></a>
        <a href="#"><i class="fab fa-instagram fa-2x logo"></i></a>
        <a href="#"><i class="fab fa-twitter fa-2x logo"></i></a>
        <a href="#"><i class="fab fa-youtube fa-2x logo"></i></a>
      </div>
      <div class="sub-links">
        <ul>
          <li><a href="#">Audio and Subtitles</a></li>
          <li><a href="#">Audio Description</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">Media Center</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Legal Notices</a></li>
          <li><a href="#">Corporate Information</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </section>
    <footer>
      <p>&copy Movie, Inc.</p>
    </footer>
  </b-container>
</template>

<style lang="scss">
.link {
  padding: 50px;
}

.sub-links ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
}

.sub-links a {
  color: var(--dark);
  text-decoration: none;
}

.sub-links a:hover {
  color: var(--dark);
  text-decoration: underline;
}

.logos a{
  padding: 10px;
}

.logo {
  color: var(--dark);
}

footer {
  padding: 20px;
  text-align: center;
  color: var(--dark);
  margin: 10px;
}
</style>
