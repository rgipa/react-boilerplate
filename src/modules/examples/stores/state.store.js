import { observable, action } from 'mobx'

import MobxService from 'modules/examples/services/api/mobx.service'

export const state = observable({
  count: 1,
  user: {
    name: '',
    permissions: [],
  },
  isUserLoading: false,
})

export const actions = {
  increment: action(() => {
    state.count++
  }),

  updateUser: action((user) => {
    state.user = user
    state.isUserLoading = false
  }),

  getUser: action(() => {
    state.isUserLoading = true
    return MobxService.getUser().then((response) => {
      actions.updateUser(response.data.user)
    })
  }),
}
