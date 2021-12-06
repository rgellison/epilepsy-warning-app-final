 //import { style } from 'dom-helpers';
import React from 'react'
 import { 
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    Button,

 } from 'react-native'

var { width } = Dimensions.get("window");

const MovieDisplay = (props) => {
    const { name, details, timeFlash, duration, image, genre } = props;
    
    return (
        <View style={styles.container}> 
            <Image
             style={styles.image}
             resizeMode="contain"
             source={{uri: image ? image : 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png'}}
             />
            <View style={styles.display}/>
            <Text style={styles.title}>
                {name.length > 15 ? name.substring(0, 15 - 3)
                + '...' : name    
            }
            </Text>
            <Text style={styles.timeFlash}>Flash Time {timeFlash}</Text>
           

            {/* { duration > 0 ? ( */}
                <View style={styles.VMbutton}>
                    <Text style={styles.VMtext} >select</Text>
                    
                    
                </View>
             <Text style={{ marginTop: 20 }}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20, 
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center', 
        elevation: 8,
        backgroundColor: '#021831',
        borderColor: '#30bca4',
        borderWidth: 5

    },
    image: {
        width: width / 2 - 20 - 10, 
        height: width / 2 - 20 - 30, 
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },

    display: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10,
        
    },
     title: {
        fontWeight: 'bold',
        marginBottom: 0,
        fontSize:18,
        color:'#30bca4',
        textAlign: 'center',
        padding: 10

     },
     timeFlash: {
        fontWeight: 'bold',
        color:'#308ebc',
        textAlign: 'center',
         fontSize: 11,
         marginTop: 0
     },
     VMbutton: {
         width: 75,
         backgroundColor: '#30bca4',
         borderRadius: 130,
         opacity: 0.7,
padding: 2,
margin: 10
     },
     VMtext: {
        fontWeight: 'bold',
        margin: 5,
        fontSize:12,
        color: 'white',
        textAlign: 'center'
    }
})

export default MovieDisplay;