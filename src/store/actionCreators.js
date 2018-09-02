import * as types from './actionTypes'

export const inputFocus = () => ({
  type: types.SEARCH_FOCUS,
  focused: true
})

export const inputBlur = () => ({
  type: types.SEARCH_BLUR,
  focused: false
})
