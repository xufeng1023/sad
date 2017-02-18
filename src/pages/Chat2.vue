<template>
	<div id="feed" class="container">
		<div class="header">
			<div id="top-bar"></div>
		    <header class="nav">
		      <div class="container">
		        <nav class="level is-mobile">
				  <div class="level-left">
				    <div class="level-item">
				      <router-link to="/feeds">
				      	<i class="fa fa-chevron-left"></i>
				      </router-link>
				    </div>
				  </div>
				  <div class="level-right">
				    <p class="level-item"></p>
				  </div>
				</nav>
		      </div>
		    </header>
		</div>
		<div id="content">
			<Box></Box>
			<Box></Box>
			<Box></Box>
			<Box></Box>
			<Box></Box>
			<Box></Box>
		</div>
		<div class="hero-foot z999">
		    <div 
			    id="chat-input" 
			    class="rounded" 
			    contenteditable="true" 
		    >
		    </div>
	  	</div>
	</div>
</template>

<script>
	import Article from '../components/Article.vue'

	export default {
		components: {
			Box: Article
		},
		methods: {

		}
	}
</script>

<style>
	#feed {
		height: 100%;
		display: flex;
    	justify-content: space-between;
    	height: 100%;
    	flex-direction: column;
	}
	.header {
		background: #00d1b2;
	}
	.header .nav {
		background: transparent;
	}
	.header .nav a {
		color: #fff;
	}
	.nav>.container {
		justify-content: center;
	}
	#content {
		max-height: 87%;
		overflow-y: scroll; 
	}
	#chat-input {
	    width: 100%;
	    color: #333;
	    height: 4rem;
	    overflow: auto;
	    outline: none;
	    border: 1px solid #00d1b2;
    	box-shadow: 0 0 3px 1px rgba(0,0,0,.20);
	}
	.message-body {
		border-radius: 0;
	}
</style>