import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {id: 0, name: "🌱", value: 0},
      {id: 1, name: "💨", value: 1},
      {id: 2, name: "🌱", value: 0},
      {id: 3, name: "💨", value: 1},
      {id: 4, name: "💎", value: 2},
      {id: 5, name: "🔥", value: 3},
      {id: 6, name: "💎", value: 2},
      {id: 7, name: "🔥", value: 3},
      {id: 8, name: "⚙️", value: 4},
      {id: 9, name: "⚙️", value: 4},
      {id: 10, name: "🌍", value: 5},
      {id: 11, name: "🌍", value: 5}
    ]
  },
  getters: {
    getFields(state) {
      return state.items;
    },
  }
})
