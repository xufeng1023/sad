<template>
	<section id="chat" class="hero is-primary is-fullheight">
		<div id="search" class="z999 has-shadow is-flex g-bg fixed v-centered full-width">
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
	  <div id="content" class="chat-body w-bg scrolled">
      	<msg-left></msg-left>
      	<msg-left></msg-left>
      	<msg-left></msg-left>
      	<msg-right></msg-right>
      	<msg-left></msg-left>
		<msg-right></msg-right>
	  </div>
	  <div id="menu" class="chat-text g-bg fixed is-flex v-centered w full-width">
	    <div id="chat-input" contenteditable="true" @keyup="updateHeight" class="rounded w-bg">
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
		methods: {
			updateHeight() {
				let chatBody = document.querySelector('.chat-body');
				let body = document.querySelector('body');
				let chatFoot = document.querySelector('#menu');
				let search = document.querySelector('#search');
				let chatHeight = body.clientHeight - search.clientHeight - chatFoot.clientHeight;
				chatBody.clientHeight = '50vh';
			}
		},
		components: {
			'msg-left': MsgLeft,
			'msg-right': MsgRight
		}
	}
</script>

<style>
	.chat-text {
		padding: 1vh 30vw;
		height: auto !important;
	}
	#chat-input {
		max-height: 8rem;
	    color: #333;
	    outline: none;
	    overflow-y: scroll;
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