import { combineReducers } from 'redux-immutable'
import headerReducer from './header'
import homeReducer from './home'
import detailReducer from './detail'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer
})

export default reducer
