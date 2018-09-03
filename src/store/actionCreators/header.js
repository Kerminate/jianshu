import axios from 'axios'
import { fromJS } from 'immutable'
import * as types from '../actionTypes'

const changeList = (data) => ({
  type: types.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: types.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: types.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: types.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: types.MOUSE_LEAVE
})

export const changePage = (data) => ({
  type: types.CHANGE_PAGE,
  page: data
})

export const getList = () => {
  return (dispatch) => {
    axios.get('api/headerList.json').then((res) => {
      dispatch(changeList(res.data.data))
    }).catch((e) => {
      console.log(e)
    })
  }
}
