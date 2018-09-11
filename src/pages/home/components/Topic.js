import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { TopicWrapper, TopicItem } from '../style'

class Topic extends PureComponent {
  render () {
    const { list } = this.props
    return (
      <TopicWrapper>
        {
          list.map((item) => (
            <TopicItem key={item.get('id')}>
              <img className='topic-pic' src={item.get('imgUrl')} alt={item.get('title')} />
              {item.get('title')}
            </TopicItem>
          ))
        }
      </TopicWrapper>
    )
  }
}

Topic.propTypes = {
  list: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'topicList'])
  }
}

export default connect(mapStateToProps, null)(Topic)
