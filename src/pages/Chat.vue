<template>
	<section id="chat" class="hero is-primary is-fullheight">
		<div id="search" class="z999 has-shadow is-flex">
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
	  <div id="content" class="chat-body">
      	<msg-left></msg-left>
      	<msg-left></msg-left>
      	<msg-left></msg-left>
      	<msg-right></msg-right>
      	<msg-left></msg-left>
		<msg-right></msg-right>
	  </div>
	  <div id="menu">
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
	import MsgRight from '../components/msgRight.vue'

	export default {
		data() {
			return {
				
			}
		},
		components: {
			'msg-left': MsgLeft,
			'msg-right': MsgRight
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
	.chat-body {
		padding: 0 4vw;
		    overflow-x: hidden;
	}
	.msg-left, .msg-right {
		max-width: 80%;
		position: relative;
		margin-bottom: 1.5rem;
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