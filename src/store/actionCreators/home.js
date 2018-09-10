import axios from 'axios'
import { fromJS } from 'immutable'
import * as types from '../actionTypes'

const changeHomeData = (data) => ({
  type: types.CHANGE_HOME_DATA,
  data: data
})

const addHomeList = (list, nextPage) => ({
  type: types.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('api/home.json').then((res) => {
      dispatch(changeHomeData(res.data.data))
    }).catch((e) => {
      console.log(e)
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('api/homeList.json?page=' + page).then((res) => {
      dispatch(addHomeList(res.data.data, page + 1))
    }).catch((e) => {
      console.log(e)
    })
  }
}

export const toggleTopShow = (show) => ({
  type: types.TOGGLE_SCROLL_TOP,
  show
})
