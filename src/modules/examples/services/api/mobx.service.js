import { httpUtils } from 'shared/utils/httpUtils'

const MobxService = {
  getUser: () => {
    return new Promise((resolve, error) => {
      setTimeout(() => {
        httpUtils.get('/json/user.json').then(resolve)
      }, 2000)
    })
  },
}

export default MobxService
