<template>
	<section id="feed" class="hero is-primary is-fullheight">
  		<div id="search" class="z999 has-shadow">
	  		<input class="input is-success rounded-border" type="text" placeholder="search subjects">
  		</div>
		<div id="content">
				<Box></Box>
				<Box></Box>
				<Box></Box>
				<Box></Box>
				<Box></Box>
				<Box></Box>
		</div>
		<div id="menu" class="tabs is-centered">
	  		<ul>
		    	<li class="is-active"><a>Pictures</a></li>
		    	<li><a>Music</a></li>
		    	<li><a>Videos</a></li>
		    	<router-link to="/" tag="li">
		    		<a><i class="fa fa-sign-out"></i></a>
	    		</router-link>
		  	</ul>
		</div>
	</section>
</template>

<script>
	import Article from '../components/Article.vue'

	export default {
		components: {
			Box: Article
		}
	}
</script>

<style>
	#search {
		background-color: #00d1b2;
		position: fixed;
	    padding-top: 3vh;
    	height: 8vh;
    	width: 100vw;
		top: 0;
	}
	#content {
		overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
		margin-top: 8vh;
		/*margin-bottom: 5vh;*/
		background: white;
		height: 92vh;
	}
	#content::-webkit-scrollbar { 
	    display: none; 
	}
	#menu {
	    background-color: #00d1b2;
    	color: #fff;
		position: fixed;
		height: 6vh;
	    width: 100vw;
		bottom: 0;
	}
</style>