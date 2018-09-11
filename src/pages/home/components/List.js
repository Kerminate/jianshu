import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { getMoreList } from '../../../store/actionCreators/home'
import { ListItem, ListInfo, LoadMore } from '../style'

class List extends PureComponent {
  render () {
    const { list, getMoreList, page } = this.props
    return (
      <div>
        {
          list.map((item, index) => (
            <Link key={index} to='/detail'>
              <ListItem>
                <img className='pic' src={item.get('imgUrl')} alt={item.get('title')} />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </div>
    )
  }
}

List.propTypes = {
  list: PropTypes.object,
  page: PropTypes.number,
  getMoreList: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList (page) {
      dispatch(getMoreList(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
