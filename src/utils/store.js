import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);



const state = {
  isShow: false,
  isBottomShow: false
}


const getters = {
  isShowMethod(state) {
    return state.isShow;
  },
  isShowBottom(state) {
    return state.isBottomShow;
  }
}


const actions = {
  showSideBar({
    commit
  }) {
    commit('showBar')
  },
  hideSideBar({
    commit
  }) {
    commit('hideBar')
  },
  showBottom({
    commit
  }) {
    commit('showBottom')
  },
  hideBottom({
    commit
  }) {
    commit('hideBottom')
  }
}


const mutations = {
  showBar(state) {
    state.isShow = true;
  },
  hideBar(state) {
    state.isShow = false;
  },
  showBottom(state) {
    state.isBottomShow = true;
  },
  hideBottom(state) {
    state.isBottomShow = false;
  }
}


const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
export default store
