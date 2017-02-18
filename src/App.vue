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
	#top-bar {
		width: 100vw;
		height: 2vh;
	}
	.z999 {
		z-index: 999;
	}
	.rounded {
		border-radius: 1rem;
	}
</style>