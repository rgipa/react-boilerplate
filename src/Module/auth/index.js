import { observable, action } from 'mobx'
import axios from 'axios'

const state = observable({
  token: localStorage.getItem('token') || null,
  data: null,
})

const store = {
  state,

  logout: action(() => {
    store.updateToken(null)

    localStorage.clear()
  }),

  updateToken: action((token) => {
    state.token = token

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    localStorage.setItem('token', token)
  }),

  login: async (username, password) => {
    const { data } = await axios.get('/json/user.json')

    store.updateToken(data.token)
  },
}

export default store
