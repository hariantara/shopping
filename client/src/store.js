import vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router/index'

vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signup: [],
    signin: [],
    stuff: [],
    findStuffById: [],
    recordTrans: []
  },
  mutations: {
    signupMutation (state, payload) {
      state.signup = payload
    },
    signinMutation (state, payload) {
      state.signin = payload
    },
    getStuffs (state, payload) {
      state.stuff = payload
    },
    stuffbyId (state, payload) {
      state.findStuffById = payload
    },
    recordTransaction (state, payload) {
      state.recordTrans = payload
    }
  },
  actions: {
    signupAction (store, payload) {
      // console.log(payload)
      axios.post('http://localhost:3000/users/signup', {
        username: payload.username,
        password: payload.password
      })
      .then(response => {
        // console.log(response)
        store.commit('signupMutation', response.data)
        alert('success register')
        router.push('Login')
      })
    },
    signinAction (store, payload) {
      axios.post('http://localhost:3000/users/signin', {
        username: payload.username,
        password: payload.password
      })
      .then(response => {
        console.log('response login: ', response.data)
        localStorage.setItem('token', response.data)
        store.commit('signinMutation', response.data)
        router.push('/')
      })
    },
    getListStuffs (store, payload) {
      axios.get('http://localhost:3000/stuffs/read')
      .then(response => {
        console.log(response.data)
        store.commit('getStuffs', response.data)
      })
    },
    getListById (store, payload) {
      console.log('===>', payload)
      axios.get(`http://localhost:3000/stuffs/read/${payload}`)
      .then(response => {
        console.log('props id: ', response.data)
        store.commit('stuffbyId', response.data)
      })
    },
    getCarts (store, payload) {
      axios.get('http://localhost:3000/transactions/read', {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(response => {
        store.commit('recordTransaction', response.data)
      })
    }
  }
})
