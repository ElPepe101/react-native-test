/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {AppRegistry, Component} from 'react-native'
// import Hello from './components/Hello.ios'
import Movies from './components/Movies.ios'

class reactnativetest extends Component {
  render () {
    // return <Hello />
    return <Movies />
  }
}

AppRegistry.registerComponent('reactnativetest', () => reactnativetest)
