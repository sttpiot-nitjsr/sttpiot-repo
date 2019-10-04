import * as React from 'react';
import { StyleSheet,View,ScrollView,Dimensions,Image} from  'React-native'


const Device_width = Dimensions.get("window").width;

class BackgroundCarousel extends React.Component {
     scrollRef = React.createRef();
     constructor(props) {
         super(props);
         this.state = {
              selectedIndex: 0
     }
}

render () {
     const {images} = this.props
     const {selectedIndex} = this.state
     return (
      <View style={{heigth: "100%", width:"100%"}}>
          <ScrollView horizontal pagingEnbled>
            {images.map(image => (
                <Image
                   key={image}
                   sources={{uri: image }}
                   style={StyleSheet.backgroundImage}
                />
            ))}
          </ScrollView>
      </View>
    );
  }
}


 const styles= StyleSheet.create({
     backgroundImage : {
         heigth: "100%",
         width: device_width
     }
 });

 export  {BackgroundCarousel};