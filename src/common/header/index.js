import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { searchFocus, searchBlur, getList, mouseEnter, mouseLeave, changePage } from '../../store/actionCreators/header'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
  SearchWrapper
} from './style'

class Header extends Component {
  getListArea () {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10 && i < newList.length; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => { this.spinIcon = icon }} className='iconfont spin'>&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render () {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? ' focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
            { this.getListArea() }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className='iconfont'>&#xe615;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

Header.propTypes = {
  focused: PropTypes.bool,
  list: PropTypes.object,
  page: PropTypes.number,
  mouseIn: PropTypes.bool,
  totalPage: PropTypes.number,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  handleChangePage: PropTypes.func,
  handleInputFocus: PropTypes.func,
  handleInputBlur: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus (list) {
      if (list.size === 0) {
        dispatch(getList())
      }
      dispatch(searchFocus())
    },
    handleInputBlur () {
      dispatch(searchBlur())
    },
    handleMouseEnter () {
      dispatch(mouseEnter())
    },
    handleMouseLeave () {
      dispatch(mouseLeave())
    },
    handleChangePage (page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      originAngle = parseInt(originAngle || 0, 10)
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      if (page < totalPage) {
        dispatch(changePage(page + 1))
      } else {
        dispatch(changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
