import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

class Write extends PureComponent {
  render () {
    const { loginStatus } = this.props
    if (loginStatus) {
      return (
        <div>写文章</div>
      )
    } else {
      return <Redirect to='/login' />
    }
  }
}

Write.propTypes = {
  loginStatus: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}

export default connect(mapStateToProps, null)(Write)
