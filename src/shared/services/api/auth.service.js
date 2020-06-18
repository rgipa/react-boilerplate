import { httpUtils } from 'shared/utils/httpUtils'

const AuthService = {
  login: () => {
    return new Promise((resolve, error) => {
      setTimeout(() => {
        httpUtils.get('/json/user.json').then(resolve)
      }, 2000)
    })
  },
}

export default AuthService
