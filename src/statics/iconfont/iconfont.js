import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1535781197359'); /* IE9*/
    src: url('./iconfont.eot?t=1535781197359#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1535781197359') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1535781197359#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`


