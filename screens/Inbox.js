import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,ScrollView,Animated,Image
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
class Inbox extends Component {

    static navigationOptions = ({navigation}) => ({
        tabBarLabel: 'Faculty',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-people" color={tintColor} size={27} />
        )
      })

    render() {
        return (
            <View style={{marginTop:0,marginBottom:7,backgroundColor:"#FAC07E"}}>
                <ScrollView>
                 <Text style={{ fontSize: 27, marginHorizontal: 1,marginLeft:75,fontWeight: "bold",color:'#3D1880'}}>
                                  Organizing Committee
                 </Text>
                 <View style={{marginTop:10,marginBottom:10}}>
                 <Text style={{ fontSize: 23, marginHorizontal: 1,marginLeft:160,fontWeight: "bold",color:'#756679'}}>
                                   Patrons
                 </Text>
                 <View style={{marginLeft:140,marginTop:15,marginHorizontal:10}}>
                  <Image 
                   style={{width:120,height:120,borderRadius: 80}}
                   source={require('../assets/faculty/kksukla.png')} />
                </View>
                 <View style={{marginLeft:75,marginTop:15,marginHorizontal:10}}>
                    <Text style={{ fontSize: 15, marginHorizontal: 1,marginLeft:0,fontWeight: "bold",color:'#0C0101'}}>
                                    Prof.K K shukla, Director ,NIT Jamshedpur
                        </Text>
                    </View>
                </View>
                <View style={{margintop:10,marginBottom:10}}>
                 <Text style={{ fontSize: 23, marginHorizontal: 1,marginLeft:130,fontWeight: "bold",color:'#756679'}}>
                                   Chairperson
                 </Text>
                 <View style={{marginLeft:140,marginTop:15,marginHorizontal:10}}>
                  <Image 
                   style={{width:120,height:120,borderRadius: 80}}
                   source={require('../assets/faculty/sns.jpg')} />
                </View>
                    <View style={{marginLeft:75,marginTop:15,marginHorizontal:10}}>
                    <Text style={{ fontSize: 15, marginHorizontal: 1,marginLeft:0,fontWeight: "bold",color:'#0C0101'}}>
                                    Prof.S N Singh, HoD, DECE, NIT Jamshedpur
                        </Text>
                    </View>
                </View>
                <View style={{marginTop:10,marginBottom:10}}>
                 <Text style={{ fontSize: 23, marginHorizontal: 1,marginLeft:140,fontWeight: "bold",color:'#756679'}}>
                                   Coordinator
                 </Text>
                 <View style={{marginLeft:140,marginTop:15,marginHorizontal:10}}>
                  <Image 
                   style={{width:120,height:120,borderRadius: 60}}
                   source={require('../assets/faculty/EC31.jpg')} />
                </View>
                 <View style={{marginLeft:75,marginTop:15,marginHorizontal:25}}>
                        <Text style={{ fontSize: 15, marginHorizontal: 1,marginLeft:0,fontWeight: "bold",color:'#0C0101'}}>
                                    Dr.Prashant Kumar,Assistant Professor
                        </Text>
                        <Text style={{ fontSize: 15, marginHorizontal: 1,marginLeft:60,fontWeight: "bold",color:'#0C0101'}}>
                                    DECE,NIT Jamshedpur
                        </Text>
                    </View>
                </View>
                <View style={{marginTop:10,marginBottom:10}}>
                 <Text style={{ fontSize: 23, marginHorizontal: 1,marginLeft:120,fontWeight: "bold",color:'#756679'}}>
                                   Faculty Members
                 </Text>
                 <View style={{marginLeft:140,marginTop:15,marginHorizontal:10}}>
                  <Image 
                   style={{width:120,height:120,borderRadius: 60}}
                   source={require('../assets/faculty/rashmis.jpg')} />
                </View>
                 <View style={{marginLeft:138,marginTop:15,marginHorizontal:25}}>
                        <Text style={{ fontSize: 15, marginHorizontal: 1,marginLeft:0,fontWeight: "bold",color:'#0C0101'}}>
                                    Dr.Rashmi Sinha
                        </Text>
                 </View>
                 <View style={{marginLeft:140,marginTop:15,marginHorizontal:10}}>
                  <Image 
                   style={{width:120,height:120,borderRadius: 60}}
                   source={require('../assets/faculty/EC07.jpg')} />
                </View>
                 <View style={{marginLeft:130,marginTop:15,marginHorizontal:25}}>
                        <Text style={{ fontSize: 15, marginHorizontal: 1,marginLeft:0,fontWeight: "bold",color:'#0C0101'}}>
                                    Dr.Jayendra Kumar
                        </Text>
                    </View>
                    <View style={{marginLeft:140,marginTop:15,marginHorizontal:10}}>
                  <Image 
                   style={{width:120,height:120,borderRadius: 60}}
                   source={require('../assets/faculty/EC26.jpg')} />
                </View>
                 <View style={{marginLeft:130,marginTop:15,marginHorizontal:25}}>
                        <Text style={{ fontSize: 15, marginHorizontal: 1,marginLeft:0,fontWeight: "bold",color:'#0C0101'}}>
                                    Dr.Basudeba Behra
                        </Text>
                    </View>
                </View>
                 </ScrollView>
            </View>
        );
    }
}
export default Inbox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});