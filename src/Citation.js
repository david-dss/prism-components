import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import Label from './Label'
import namespace from './namespace'

class Citation extends Component {

  static styleName = 'Citation'

  static propTypes = {
    emdash: PropTypes.bool,
    spacer: PropTypes.bool
  }

  static defaultProps = {
    emdash: false,
    whitespace: false
  }

  render() {
    let {emdash, whitespace, children} = this.props
    if (emdash && typeof(children) === 'string') {
      whitespace = whitespace ? ' ' : ''
      children = `${'\u2014'}${whitespace}${children}`
    }
    return (
      <Label
        {...this.props}>
        {children}
      </Label>
    )
  }
}

export default Prism(Citation, {namespace})
