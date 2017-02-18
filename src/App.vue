<template>
    <router-view></router-view>
</template>

<script>
	export default {
		
	}
</script>

<style>
	html,body {
		height: 100%;
	}
	.has-shadow {
		box-shadow: 0 6px 3px rgba(10, 10, 10, 0.1);
	}
	.z999 {
		z-index: 999;
	}
	.rounded {
		border-radius: 1rem;
	}
	.fixed {
		position: fixed;
	}
	.scrolled {
		overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
	}
	.w {
		color: #fff;
	}
	.g-bg {
		background-color: #00d1b2;
	}
	.w-bg {
		background-color: #fff;
	}
	.v-centered {
		flex-direction: column;
    	justify-content: center;
	}
	.full-width {
		width: 100vw;
	}
</style>