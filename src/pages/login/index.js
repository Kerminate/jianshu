import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { login } from '../../store/actionCreators/login'
import { LoginWrapper, LoginBox, Input, Button } from './style'

class Login extends PureComponent {
  render () {
    const { loginStatus, login } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' innerRef={(input) => { this.account = input }} />
            <Input placeholder='密码' type='password' innerRef={(input) => { this.password = input }} />
            <Button onClick={() => login(this.account, this.password)} >登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/' />
    }
  }
}

Login.propTypes = {
  loginStatus: PropTypes.bool,
  login: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login (accountElem, passwordElem) {
      dispatch(login(accountElem.value, passwordElem.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
