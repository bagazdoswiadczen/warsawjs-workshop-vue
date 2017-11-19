import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quiz: null
  },
  actions: {
    init({ commit }) {
      fetch('/static/quiz.json')
        .then((res) => res.json())
        .then((quiz) => {
          commit('init', quiz);
        })
    }
  },
  mutations: {
    init(state, quiz) {
      state.quiz = quiz;
    }
  },
  getters: {
    quiz(state) {
      return state.quiz;
    }
  }
});
