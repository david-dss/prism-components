import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'
import {View} from 'react-native-prism-primitives'
import Namespace from './Namespace'

class Layout extends Component {
  static styleOptions = ({compile}) => {
    return {
      mapPropsToStyle: {
        center: ({prop}) => {
          if (prop === true) {
            return {alignItems: 'center', justifyContent: 'center'}
          }
        },
        start: ({prop}) => {
          return {alignItems: 'flex-start'}
        },
        end: ({prop}) => {
          return {alignItems: 'flex-end'}
        }
      }
    }
  }

  static propTypes = {
    center: PropTypes.bool,
    start: PropTypes.bool,
    end: PropTypes.bool
  }

  render() {
    const {style} = this.props
    return (
      <View style={style}>{this.props.children}</View>
    )
  }
}

export default Prism(Layout, Namespace)
