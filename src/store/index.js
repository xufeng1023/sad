import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
	login: {
		nickname: 'tt',
		language: 'English'
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations
})