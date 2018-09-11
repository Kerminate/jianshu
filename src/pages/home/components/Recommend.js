import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { RecommendWrapper, RecommendItem } from '../style'

class Recommend extends PureComponent {
  render () {
    const { list } = this.props
    return (
      <RecommendWrapper>
        {
          list.map((item) => (
            <RecommendItem
              key={item.get('id')}
              imgUrl={item.get('imgUrl')}
            />
          ))
        }
      </RecommendWrapper>
    )
  }
}

Recommend.propTypes = {
  list: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'recommendList'])
  }
}

export default connect(mapStateToProps, null)(Recommend)
