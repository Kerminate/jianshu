import axios from 'axios'
import * as types from '../actionTypes'

const changeLogin = () => ({
  type: types.CHANGE_LOGIN,
  value: true
})

export const logout = () => ({
  type: types.LOGOUT,
  value: false
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
      const result = res.data.data
      console.log(result)
      if (result) {
        dispatch(changeLogin())
      } else {
        window.alert('登录失败')
      }
    }).catch((e) => {
      console.log(e)
    })
  }
}
