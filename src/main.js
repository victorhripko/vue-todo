import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    listOfTask: []
  },
  getters: {
    doneTodos: state => {
      return state.listOfTask.filter(todo => todo.done).length;
    },
    countTodos: state => {
      return state.listOfTask.length;
    }
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
