import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  a: 1
}

// 可以认为是 store 的计算属性
const getters = {
}

const mutations = {
  increment: function (state) {
    state.a++
  }
}

const actions = {
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
