import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
	login: {
		nickname: null,
		language: 'Chinese'
	}
}

const mutations = {
  checkNickname (state, { name }) {
    if(!name) alert('no')
  }
}

export default new Vuex.Store({
	state,
	getters,
	mutations
})