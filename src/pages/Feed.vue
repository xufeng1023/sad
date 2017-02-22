<template>
	<section id="feed" class="hero is-primary is-fullheight">
  		<div id="top" class="z999 has-shadow is-flex g-bg fixed v-centered full-width">
	  		<input class="input is-success rounded-border" type="text" placeholder="search subjects">
  		</div>
		<div id="content" class="w-bg scrolled">
				<Feed></Feed>
				<Feed></Feed>
				<Feed></Feed>
				<Feed></Feed>
				<Feed></Feed>
				<Feed></Feed>
		</div>
		<div id="bottom" class="tabs g-bg fixed v-centered w full-width is-centered">
	  		<ul>
		    	<li class="is-active"><a>Pictures</a></li>
		    	<li><a>Music</a></li>
		    	<li><a>Videos</a></li>
		    	<router-link :to="rootPath" tag="li">
		    		<a><i class="fa fa-sign-out"></i></a>
	    		</router-link>
		  	</ul>
		</div>
	</section>
</template>

<script>
	import Feed from '../components/Article.vue'
	import { rootPath } from '../config'

	export default {
		data() {
			return {
				rootPath
			}
		},
		components: {
			Feed,
		},
		beforeRouteLeave (to, from, next) {
		    window.localStorage.removeItem('vue-test')
		    next()
	  	}
	}
</script>

<style>
	
</style>