<template>
  <div id="app">
  	<header id="header">
      <h1>Movies App</h1>
      <p>Welcome to the Movies App!</p>
      <a href="/home"> Home</a> | 
      <a href="/login"> Login</a> | 
      <a href="/movies"> All Movies</a> | 
      <a href="/actors"> All Actors</a> | 
      <a href="/signup"> Signup</a> | 
      <!-- <a href="/about"> About</a> |  -->
      <a href="/actors/new"> New Actors</a> | 
      <a href="/movies/new"> New Movies</a> 

    </header>
      <router-view />
      	<footer id="footer">
						<section> 
							<h2>Movie App</h2>
							<p>The best movie app around .</p>
							<ul class="actions">
								<li><a href="#" class="button">Learn More</a></li>
							</ul>
						</section>
		
					<p class="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
				</footer>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      flashMessage: ""
    };
  },
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    }
  }
};
</script>
