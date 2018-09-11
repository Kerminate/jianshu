import React from 'react'
import ReactDOM from 'react-dom'
import { registerObserver } from 'react-perf-devtool'
import App from './App'
import './style'
import './statics/iconfont/iconfont'

registerObserver()

ReactDOM.render(<App />, document.getElementById('root'))
