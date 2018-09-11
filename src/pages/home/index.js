import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { getHomeInfo, toggleTopShow } from '../../store/actionCreators/home'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends PureComponent {
  componentDidMount () {
    this.props.initHomeInfo()
    this.bindEvents()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollShow)
  }

  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollShow)
  }

  handleScrollTop () {
    window.scrollTo(0, 0)
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
        {
          this.props.showScroll
            ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
            : null
        }
      </HomeWrapper>
    )
  }
}

Home.propTypes = {
  showScroll: PropTypes.bool,
  initHomeInfo: PropTypes.func,
  changeScrollShow: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initHomeInfo () {
      dispatch(getHomeInfo())
    },
    changeScrollShow () {
      if (document.documentElement.scrollTop > 100) {
        dispatch(toggleTopShow(true))
      } else {
        dispatch(toggleTopShow(false))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
