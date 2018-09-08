import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '故事',
    imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 2,
    title: '读书',
    imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 3,
    title: '旅行·在路上',
    imgUrl: '//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 4,
    title: '@IT·互联网',
    imgUrl: '//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 5,
    title: '自然科普',
    imgUrl: '//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 6,
    title: '摄影',
    imgUrl: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 7,
    title: '简书电影',
    imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
