import * as React from 'react'
import {creareAppContainer} from 'reacr-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import home from './screens/home'
import details from './screens/details'
import { createAppContainer } from 'react-navigation'
export default function App() {
  return <AppContainer/>
}
const appStackNavigator=createStackNavigator({
  home:{
    screen:home,
    navigationOptions:{
      headerShown:False
    }
  },
  details:{
    screen:details,
  }},
  {initialRouteName:"home"}
)
const AppContainer=createAppContainer(appStackNavigator)
