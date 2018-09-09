import axios from 'axios'
import * as types from '../actionTypes'

const changeHomeData = (data) => ({
  type: types.CHANGE_HOME_DATA,
  data: data
})

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('api/home.json').then((res) => {
      dispatch(changeHomeData(res.data.data))
    }).catch((e) => {
      console.log(e)
    })
  }
}
