import { combineReducers } from 'redux-immutable'
import headerReducer from './header'
import homeReducer from './home'
import detailReducer from './detail'
import loginReducer from './login'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})

export default reducer
