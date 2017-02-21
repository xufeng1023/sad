<template>
	<div id="home" class="container">
		<div class="columns">
	  		<div class="column is-half is-offset-one-quarter">
				<p class="control">
				  <input class="input is-success" type="text" v-model.trim="nickname" placeholder="Nickname">
				</p>
				<p class="control">
				  <span class="select is-fullwidth">
				    <select class="is-success is-fullwidth" v-model="language">
				      <option value="English">English</option>
				      <option value="Chinese">Chinese</option>
				      <option value="Japanese">Japanese</option>
				    </select>
				  </span>
				</p>
				<p class="control">
					<router-link to="/feeds" tag="button" class="button is-primary is-fullwidth" @click.native="checkNickname({name:nickname})">Start</router-link>
				</p>
	  		</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'

	export default {
		data() {
			return {
				selectLan: "Chinese"
			}
		},
		computed: mapGetters([
			'nickname',
			'language'
		]),
		methods: mapMutations([
			'checkNickname'
		])
	}
</script>

<style>
	#home {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	select.is-success {
	    border-color: #23d160;
	}
</style>