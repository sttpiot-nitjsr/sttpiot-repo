import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Animated,
    TextInput,
    TouchableOpacity,Image
} from "react-native";
import {BackgroundCarousel} from './BackgroundCarousel'
import { Constants } from 'expo';

import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import * as anim from './Helpers/Animations.js'
import H_Scroll from './Horizontal_Scroll.js'
import Homes_Around from './Homes_Around.js'
import Animated_Header from './Animated_Header.js'
import * as Font from 'expo-font'
import Icon from 'react-native-vector-icons/Ionicons'
const { height, width } = Dimensions.get('window')
const images = [
     "https://i.imgur.com/ArRK255.png",
     "https://i.imgur.com/Kq6IpoH.png",
     "https://i.imgur.com/1f6iq1c.png"
]
class Explore extends Component {
    state = {
        location:null,
        errorMessage:null,
        loclabel:null,
        fontLoaded:false
    }
    static navigationOptions = {
        headerTitle:"Airbnb",
        header:null,
        headerStyle: {
            backgroundColor: '#ff8c1a',
            //marginTop:25,
            //marginHorizontal:20
          },
      }

    //sendDataToSaved = (obj) => {this.props.navigation.setParams({ cat_data: obj })}
    navToView = (props) => (this.props.navigation.navigate("explore_view",props))

    navToLoc = (props) => (this.props.navigation.navigate("explore_location",props))

    componentWillMount(){
        this._getfontAsync();
        this._getLocationAsync();
    }

    _getfontAsync = async() => {
        await Font.loadAsync({
            'sea-gardens': require('../../assets/fonts/sea-gardens/SEA_GARDENS.ttf'),
          });
          this.setState({ fontLoaded: true });
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
        const latitude = this.state.location.coords.latitude
        const longitude = this.state.location.coords.longitude
        const loc = await fetch("https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox="+latitude+"%2C"+longitude+"%2C250&mode=retrieveAddresses&maxresults=1&app_id=5Gs4xwlu4BvbePYLpADt&app_code=ec_Gdv6WR9XJVE9CK0GLwQ")
        const locdata = await loc.json()
        const loclabel = locdata.Response.View[0].Result[0].Location.Address.Label
        console.log(locdata.Response.View[0].Result[0].Location.Address.Label)
        this.setState({loclabel})
        
      };


    render() {
        // if(!this.state.loclabel || !this.state.fontLoaded) return <View/>
        // console.log(this.state.location)
         return (
            <View style={{backgroundColor:"white"}}>
                <ScrollView>
                 <Text style={{ fontSize: width/16, marginHorizontal: width/411,marginLeft:width/27,fontWeight: "bold",color:'#000105'}}>
                                  Short Term Training Programme 
                 </Text>
                 <Text style={{ fontSize: width/22, marginHorizontal: width/20,marginLeft:width/2,fontStyle: 'italic',color:'#000105'}}>
                                           on
                 </Text>
                 <Text style={{ fontSize: width/15, marginHorizontal: width/27,marginLeft:width/6,fontWeight: "bold",color:'#000105'}}>
                                  Internet Of Things(IOT)
                 </Text>
                 <Text style={{ fontSize: width/14, marginHorizontal: width/20,marginLeft:width/3,fontWeight: "bold",color:'#000105'}}>               
                                      (STTPIoT-19)
                 </Text>
                 <Text style={{ fontSize: width/22, marginHorizontal: width/20,marginLeft:width/3,fontStyle: 'italic',color:'#000105'}}>  
                                    october 9-13,2019
                 </Text>
            <View style={{flexDirection:"row",marginHorizontal: width/51.3,marginLeft:width/31.6,marginTop:height/39.04,marginBottom:height/122.7,backgroundColor:"white"}}>
               <Image 
               style={{width:width/3.425,height:height/7.15}}
               source={require('../../assets/aicte.png')} />
               <Image 
               style={{width:width/2.93,height:height/6.13}}
               source={require('../../assets/nit.png')} />
               <Image 
               style={{width:width/3.425,height:height/7.15}}
               source={require('../../assets/atal.png')} />
            </View> 
            <View style={{marginHorizontal: width/41.1,marginLeft:width/41.1,marginTop:height/85.9}}>
                <Text style={{ fontSize: width/18, marginHorizontal: width/411,marginLeft:width/3.36,fontWeight: "bold",color:'#000105'}}>
                                 Organised by
                </Text>
                <Text style={{ fontSize: width/17, marginHorizontal: width/411,marginLeft:width/3.57,marginTop:height/171.8,fontWeight: "bold",color:'#000105'}}>
                                 Department of 
                </Text>
                <Text style={{ fontSize: width/22, marginHorizontal: width/411,fontWeight: "bold",color:'#000105'}}>
                                 Electronics and Communication Engineering 
                </Text>
                <Text style={{ fontSize: width/18, marginHorizontal: width/411,marginLeft:width/18.68,fontWeight: "bold",color:'#000105'}}>
                                National Institute Of Technology
                </Text>
                <Text style={{ fontSize: width/18, marginHorizontal: width/411,marginLeft:width/4.83,marginTop:height/171.8,fontWeight: "bold",color:'#000105'}}>
                                in collaboration with
                </Text>
                <Text style={{ fontSize: width/19, marginHorizontal: width/411,marginLeft:width/13.7,marginTop:5,fontWeight: "bold",color:'#000105'}}>
                               AICTE Training And Learning (ATAL)
                </Text>
                <Text style={{ fontSize: width/18, marginHorizontal: width/411,marginLeft:width/4.83,fontWeight: "bold",color:'#000105'}}>
                               Academy, Guwahati 
                </Text>
            </View>
                        {/* <View style={{flexDirection:"row",marginHorizontal: 8,marginLeft:15,marginTop:22,marginBottom:7}}>
                        <Image 
                        style={{width:width/1.096,height:height/3.90}}
                        source={{uri : "https://i.imgur.com/ArRK255.png" }} />
                        </View> */}
                    <View style={styles.content}>
                            <BackgroundCarousel images={images}/>
                    </View>
            <View style={{marginHorizontal: width/41.1,marginLeft:width/41.1,marginTop:width/41.1}}>
                <Text style={{ fontSize: width/18, marginHorizontal: width/411,marginLeft:width/2.56,fontWeight: "bold",color:'#B50909'}}>
                                 Venue: 
                </Text>
                <Text style={{ fontSize: width/17, marginHorizontal: width/411,marginLeft:width/3.57,fontWeight: "bold",color:'#B50909'}}>
                                 Department of 
                </Text>
                <Text style={{ fontSize: width/22, marginHorizontal: width/411,fontWeight: "bold",color:'#B50909'}}>
                                 Electronics and Communication Engineering 
                </Text>
                <Text style={{ fontSize: width/20, marginHorizontal: width/411,marginLeft:width/51.37,fontWeight: "bold",color:'#B50909'}}>
                                 South Annex, NIT Jamhsedpur–831014, 
                </Text>
                <Text style={{ fontSize: width/18, marginHorizontal: width/411,marginLeft:width/3.57,fontWeight: "bold",color:'#B50909'}}>
                                 Jharkhand, India
                </Text>
            </View>
            <View style={{marginHorizontal: 10,marginLeft:10,marginTop:10}}>
                <Text style={{ fontSize:width/18, marginHorizontal: 1,marginLeft:80,fontWeight: "bold",color:'#040000'}}>
                                About NIT Jamshedpur
                </Text>
                <Text style={{ fontSize: width/27, marginHorizontal: 5,marginLeft:12,color:'#040000'}}>
                         National Institute of Technology, Jamshedpur earlier known as Regional Institute of Technology (RIT) was established on 15th August 1960 as a joint venture of Government of India and the Government of Bihar in the chain of Regional Engineering Colleges in India with the aim to generate technical graduates of highest standards who could provide technological leadership to the region. On 27th December 2002, RIT was transformed to National Institute of Technology, Jamshedpur with the status of a Deemed University. The Institute has 12 departments including engineering, science and humanities. It has more than 200 faculty, 4000 students and 150 administrative and supporting staff. It has a self-contained campus located on the outskirts of Jamshedpur on 341.3 acres of sprawling, rolling hilly, wooded land. It combines natural beauty of countryside with urban glamour of a mineral-rich industrial area in the state of Jharkhand. It surrounded by giant and medium scale industries and reputed Institutes. 
                </Text>
            </View>
            <View style={{marginHorizontal: 10,marginLeft:10,marginTop:5}}>
                <Text style={{ fontSize: width/18, marginHorizontal: 1,marginLeft:70,fontWeight: "bold",color:'#040000'}}>
                                About The Department
                </Text>
                <Text style={{ fontSize: width/27, marginHorizontal: 5,marginLeft:12,color:'#040000'}}>
                          Department of Electronics and Communication Engineering was started in 1989. The department aims to be a national leader in imparting quality education, carrying out research and technology development. The department provides an outstanding research environment and offers academic program leading to the award of B.Tech., M.Tech. and Ph.D. degrees.  
                </Text>
            </View>
            <View style={{marginHorizontal: 10,marginLeft:10,marginTop:5}}>
                <Text style={{ fontSize: width/18, marginHorizontal: 1,marginLeft:30,fontWeight: "bold",color:'#040000'}}>
                             About ATAL Academy Guwahati 
                </Text>
                <Text style={{ fontSize: width/27, marginHorizontal: 5,marginLeft:12,color:'#040000'}}>
                         AICTE Training And Learning (ATAL) Academy, Guwahati was digitally announced with establishment of other three Academies in the country at Vadodara, Guwahati & Trivendram by MHRD, Government of India on 24.9.2018. Some of the  objectives of ATAL being:   
                </Text>
                <Text style={{ fontSize: width/27, marginHorizontal: 5,marginLeft:12,color:'#040000'}}>
                        --> To support technical institutions in fostering research innovation and entrepreneurship through training 
                </Text>
                <Text style={{ fontSize: width/27, marginHorizontal: 5,marginLeft:15,color:'#040000'}}>
                        --> To stress upon empowering technical teachers & technicians using Information & Communication Technology 
                </Text>
                <Text style={{ fontSize: width/27, marginHorizontal: 5,marginLeft:15,color:'#040000'}}>
                        --> To provide a variety of opportunities for training and exchange of experiences such as workshops, orientations, learning communities, peer mentoring and other faculty development programmes.  
                </Text>
             </View>
            <View style={{marginHorizontal: 10,marginLeft:10,marginTop:5,marginBottom:15,backgroundColor:"#B2C0F5",borderRadius:40}}>
                <Text style={{ fontSize: width/27, marginHorizontal: 5,marginLeft:25,fontWeight: "bold",fontStyle: 'italic',color:'#F8F8FA'}}>
                        Email for communication: sttpiot19@gmail.com         
                </Text>
                <Text style={{ fontSize: width/27, marginHorizontal: 5,marginLeft:22,fontWeight: "bold",fontStyle: 'italic',color:'#F8F8FA'}}>
                        Address for communication: Dr. Prashant Kumar
                </Text>
                <Text style={{ fontSize: width/27, marginHorizontal: 5,marginLeft:22,fontWeight: "bold",fontStyle: 'italic',color:'#F8F8FA'}}>
                       SA-107, ECE Dept. NIT Jamshedpur-831014,   Jharkhand.      
                </Text>
            </View>
            </ScrollView>
           </View>
        
         );
        //     <View style={{ flex: 1 ,backgroundColor:"white"}}>
        //         <View style={{ flex: 1,backgroundColor:"#f5f5f0" }}>
        //             <Animated_Header navtoloc = {this.navToLoc} loc={this.state.location} loclabel={this.state.loclabel}/>
        //             {/* <Text>{this.state.loclabel}</Text> */}
        //             <ScrollView
        //                     scrollEventThrottle={16}
        //                     onScroll={Animated.event(
        //                         [
        //                             { nativeEvent: { contentOffset: { y: anim.scrollY } } }
        //                         ]
        //                     )}>


        //                     <View style={{alignItems:"center",flexDirection:"row",margin:12,backgroundColor:'#d6d6c2',height:40,borderRadius:10}}>
        //                     <Icon name="ios-search" size={20} style={{marginLeft:10}} /> 
        //                         <TextInput
        //                             underlineColorAndroid="transparent"
        //                             placeholder="Search for Rooms,Restaurants.."
        //                             placeholderTextColor="grey"
        //                             style={{ flex: 1, height:25,fontWeight: '700',fontSize:15, backgroundColor: '#d6d6c2',marginLeft:10 }}
        //                             onFocus = {() => (this.props.navtoloc(this.props.loc))}
        //                         /> 
        //                     </View>

                            
        //                     <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
        //                     <View style={{flexDirection:"row",marginTop:7,marginBottom:7}}>
        //                         <Text style={{ fontSize: 20, marginHorizontal: 20,fontFamily: 'sea-gardens',color:'#ff8c1a'}}>
        //                             FEATURED TYPES
        //                         </Text>
        //                         <TouchableOpacity style={{backgroundColor:"white",alignItems:"center"
        //                         , marginLeft:70,height:25,width:70}}>
        //                         <Text style={{ fontSize: 15,color: '#ff8c1a'}}>
        //                             See All
        //                         </Text>
        //                         </TouchableOpacity>
        //                     </View>
        //                         <View style={{ height: 200, marginTop: 10 }}>
        //                         <H_Scroll navtoview={this.navToView}/>
        //                         </View>
        //                     </View>    
        //                     {/* <Homes_Around navtoview={this.navToView}/> */}
        //                     <View style={{backgroundColor:"#ffffff" ,marginTop:5,height:500}}>
        //                         <Text style={{ fontSize: 20, paddingLeft:20,marginTop:17,fontFamily: 'sea-gardens',color:'#ff8c1a'}}>
        //                             TRENDING
        //                         </Text>
        //                         <View style={{height:400,backgroundColor:"#f5f5f0",marginTop:20,flex:1}}>
        //                              <View style={{backgroundColor:"#f5f5f0",marginHorizontal:4,marginTop:4,flexDirection:"row",marginBottom:2,flex:1}}>
        //                                 <View style={{flex:1,marginRight:2,backgroundColor:"#ffffff"}}>
                                            
        //                                 </View> 
        //                                 <View style={{flex:1,marginLeft:2,backgroundColor:"#ffffff"}}>

        //                                 </View> 
        //                             </View>
        //                             <View style={{backgroundColor:"#f5f5f0",marginHorizontal:4,marginBottom:4,flexDirection:"row",marginTop:2,flex:1}}>
        //                                 <View style={{flex:1,marginRight:2,backgroundColor:"#ffffff"}}>
                                            
        //                                 </View> 
        //                                 <View style={{flex:1,marginLeft:2,backgroundColor:"#ffffff"}}>

        //                                 </View> 
        //                             </View>
                                   

        //                         </View>
        //                     </View>
                                


        //             </ScrollView>
        //         </View>
        //     </View>
        // );
    }
    }
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#FSFCFF"
    }
});