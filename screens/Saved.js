import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import H_Scroll from './Explore/Horizontal_Scroll.js'
class Saved extends Component {

    static navigationOptions = ({navigation}) => ({
        tabBarLabel: 'EVENTS',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-archive" color={tintColor} size={24} />
        )
      })

    render() {
        console.log(this.props.navigation.getParam("cat_data"))
        return (
            <View style={styles.container}>
                <Text style={{fontSize:25}}>YOUR EVENTS WILL APPEAR HERE</Text>
            </View>
        );
    }
}
export default Saved;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});