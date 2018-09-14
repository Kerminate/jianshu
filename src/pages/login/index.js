import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import { LoginWrapper, LoginBox, Input, Button } from './style'

class Login extends PureComponent {
  render () {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='账号' />
          <Input placeholder='密码' />
          <Button>登录</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
}

Login.propTypes = {
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
