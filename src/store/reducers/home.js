import { fromJS } from 'immutable'
import * as types from '../actionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.data.topicList),
        articleList: fromJS(action.data.articleList),
        recommendList: fromJS(action.data.recommendList)
      })
    case types.ADD_ARTICLE_LIST:
      return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
      })
    case types.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show)
    default:
      return state
  }
}
