import { observable, action } from 'mobx'

import AuthService from 'shared/services/api/auth.service'

export const state = observable({
  token: localStorage.getItem('token') || null,
  user: JSON.parse(localStorage.getItem('user')) || null,
})

export const actions = {
  logout: action(() => {
    actions.updateToken(null)

    localStorage.clear()
  }),

  updateUser: action((data) => {
    state.user = data.user
    state.token = data.token

    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
  }),

  login: (username, password) => {
    const payload = { username, password }

    return AuthService.login(payload).then((response) => {
      actions.updateUser(response.data)
      window.location = '/'
    })
  },
}
