<template>
	<div class="hero is-primary">
	  <div class="hero-head z999">
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
	  <div class="hero-body">
      	<msg-left></msg-left>
      	<msg-left></msg-left>
      	<msg-left></msg-left>
      	<msg-left></msg-left>
		<article class="msg-right">
		  	<div class="media-content box">
			    <div class="content">
	        		<p>Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lor</p>
			    </div>
		  	</div>
		</article>
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
	import MsgLeft from '../components/msgLeft.vue'

	export default {
		data() {
			return {
				
			}
		},
		components: {
			'msg-left': MsgLeft
		}
	}
</script>

<style>
	#chat-input {
	    width: 100%;
	    color: #333;
	    max-height: 4rem;
	    overflow: auto;
	    outline: none;
	    border: 1px solid #00d1b2;
    	box-shadow: 0 0 3px 1px rgba(0,0,0,.20);
	}
	/*.hero-head {
		height: 10vh;
		background-color: #00d1b2;
	}*/
	/*.hero-foot {
	    width: 100%;
	    height: 5vh;
		padding: 0.5rem 1.5rem;
	}*/
	/*.hero-body {
		display: block;
		overflow: scroll;
		height: 85vh;
	}*/
	/*.hero-body,.hero-foot {
		background: #fff;
	}*/
	/*.nav>.container {
		justify-content: center;
	}*/
	.msg-left, .msg-right {
		max-width: 90%;
		position: relative;
		margin-bottom: 1.5rem;
	}
	.msg-left {
		margin-right: 10%;
	}
	.msg-right {
		margin-left: 10%;
	}
	.msg-left::before, .msg-left::after,
	.msg-right::before, .msg-right::after {
	    top: 50%;
	    border: solid;
	    content: " ";
	    height: 0;
	    width: 0;
	    position: absolute;
	    pointer-events: none;
	    border-width: 0.7rem;
	    margin-top: -2rem;
	}
	.msg-left::before {
		right: 100%;
		border-color: rgba(65, 89, 105, 0);
	    border-right-color: rgba(10,10,10,.1);
	}
	.msg-left::after {
		right: 100%;
		border-color: rgba(136, 183, 213, 0);
		border-right-color: #fff;
		margin-right: -2px;
	}
	.msg-right::after {
		left: 100%;
		border-color: rgba(136, 183, 213, 0);
		border-left-color: #fff;
		margin-left: -2px;
	}
	.msg-right::before {
		left: 100%;
		border-color: rgba(194, 225, 245, 0);
		border-left-color: rgba(10,10,10,.1);
	}
</style>