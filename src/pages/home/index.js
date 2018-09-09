import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { getHomeData } from '../../store/actionCreators/home'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends Component {
  componentDidMount () {
    this.props.initHomeData()
  }

  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4431/05142bf9b8bb00a31e0ceae8a16856bc896f529e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='index-img' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
}

Home.propTypes = {
  initHomeData: PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
  return {
    initHomeData () {
      dispatch(getHomeData())
    }
  }
}

export default connect(null, mapDispatchToProps)(Home)
