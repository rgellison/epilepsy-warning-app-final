import Icon  from "react-native-vector-icons/FontAwesome";
import React, { useState, useEffect } from 'react'
 import { 
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    Button,

 } from 'react-native'
import { shouldUseActivityState } from 'react-native-screens';

 const epilepsyData = require('../assets/data/patient.json');

var { width } = Dimensions.get("window");

const EpilepsyInfo = (props) => {
    const { user, age, gender, address, type, history } = props;

    
    return (
        <View style={styles.container}> 
          <Icon 
                            name="user-circle"
                            style={{ position: "relative" }}
                            color={'white'}
                            size={100}
                        />
                         <View style={styles.display}/>
            <Text style={styles.user}>Unknown</Text>
            <Text style={styles.age}>Age</Text>
            <Text style={styles.gender}>gender</Text>
            <Text style={styles.address}>Address</Text>
            <Text style={styles.type}>Epilepsy Type</Text>
            <Text style={styles.history}>Medical History</Text>
        </View>
    )
    }

const styles = StyleSheet.create({
    container: {
        width: 120, 
        height: 120,
        padding: 10,
        borderRadius: 500,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 130,
        marginRight: 130,
        alignItems: 'center', 
        borderColor: 'grey',
        elevation: 8,
        backgroundColor: 'grey'
},
    image: {
        width: width / 2 - 20 - 10, 
        height: width / 2 - 20 - 30, 
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    display: {
        marginTop: 20,
        marginLeft: 5,
        backgroundColor: 'transparent',
    },
     user: {
         fontSize: 22,
        textAlign: 'center',
        color: 'grey',
        fontWeight: 'bold',
        marginBottom: 5,
        padding: 0
     },
    age: {
        fontWeight: "bold",
         fontSize: 14, 
         textAlign: 'center',
         color: 'white',
         backgroundColor: '#30bca4',
         padding: 7,
         margin: 5,
         opacity: 0.7,
         width: 300,
         textAlign:"left",
    },
    gender: {
        fontWeight: "bold",
         fontSize: 14, 
         textAlign: 'center',
         color: 'white',
         backgroundColor: '#30bca4',
         padding: 7,
         margin: 5,
         opacity: 0.7,
         width: 300,
         textAlign:"left",
    },
    address: {
        fontWeight: "bold",
         fontSize: 14, 
         textAlign: 'center',
         color: 'white',
         backgroundColor: '#30bca4',
         padding: 7,
         margin: 5,
         opacity: 0.7,
         width: 300,
         textAlign:"left",
         height: 65
    },
    type: {
        fontWeight: "bold",
         fontSize: 14, 
         textAlign: 'center',
         color: 'white',
         backgroundColor: '#30bca4',
         padding: 7,
         margin: 5,
         opacity: 0.7,
         width: 300,
         textAlign:"left",
    },
    history: {
        fontWeight: "bold",
         fontSize: 14, 
         textAlign: 'center',
         color: 'white',
         backgroundColor: '#30bca4',
         padding: 7,
         margin: 5,
         opacity: 0.7,
         width: 300,
         textAlign:"left",
         height: 100
    },

    seizures: {
        fontSize: 12,
        textAlign: 'left'
    },

    triggers: {
        fontSize: 12,
        textAlign: 'left'
    }
})


export default EpilepsyInfo;