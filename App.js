import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import { createTabNavigator,createMaterialTopTabNavigator,createStackNavigator,createAppContainer} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './screens/Explore/Explore.js'
import Explore_view from './screens/Explore/View.js'
import Explore_location from './screens/Explore/Location.js'
import Saved from './screens/Saved'
import Inbox from './screens/Inbox'
import Trips from './screens/Trips'
import ProfileStack from './screens/Profile'
const { height, width } = Dimensions.get('window')
 const exploreStack = createStackNavigator({
   explore_home : Explore,
   explore_view : Explore_view,
   explore_location : Explore_location
 },{
   initialRouteName:"explore_home",
   //headerMode: 'none',
   //headerMode: 'none',
   mode: 'modal',
   transparentCard: true,
   navigationOptions: {
    headerTintColor: "#a41034",
    headerVisible: true,
    headerTransparent: true,
    
    // headerStyle: {
    //   backgroundColor: "#fff"
    // },
    tabBarLabel: 'HOME',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" color={tintColor} size={26} />
    )
  }
 })

 
const tabnav = createMaterialTopTabNavigator({
    Explore:exploreStack,
    Saved:Saved,
    Inbox:Inbox,
    Profile:ProfileStack
},{
  tabBarOptions: {
    activeTintColor: '#ff8c1a',
    inactiveTintColor: 'white',
    style: {
      backgroundColor: '#4F73DA',
      borderTopWidth: 0,
      fontWeight:"bold",
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      //elevation: 50
    }
  }})
  
const AppContainer = createAppContainer(tabnav)
export default class App extends React.Component {
 
  render() {
    return (
          <View style={{flex:1,backgroundColor: '#4F73DA'}}>
             <Text style={{ fontSize: width/15.22, marginHorizontal: width/411,marginLeft:width/2.85,fontWeight: "bold",color:'#ff8c1a'}}>
               STTPIoT-19
               </Text>
               <AppContainer />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
