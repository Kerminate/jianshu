import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getDetail } from '../../store/actionCreators/detail'
import { DetailWrapper, Header, Content } from './style'

class Detail extends PureComponent {
  componentDidMount () {
    this.props.getPageDetail(this.props.match.params.id)
  }
  render () {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </DetailWrapper>
    )
  }
}

Detail.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  getPageDetail: PropTypes.func,
  match: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPageDetail (id) {
      dispatch(getDetail(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
