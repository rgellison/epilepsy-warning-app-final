import React, { useContext, useState, useCallback } from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { Container, Icon } from "native-base"
import { useFocusEffect } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

import axios from "axios"
import baseURL from '../../../assets/common/baseUrl';
//import baseURL from '../../../assets/common/baseUrl';

import AuthGlobal from '../../../Context/AuthGlobal';
import { logoutUser } from "../../../Context/Auth.actions";
import { useEffect } from 'react/cjs/react.development';


const UserProfile  = (props) => {

    const context = useContext(AuthGlobal)
    const [userProfile, setUserProfile] = useState()

    useEffect (() => {

        if(

            context.stateUser.isAuthenticated === false || context.stateUser.isAuthenticated === null
        ) {

            props.navigation.navigate("Login")
        }

        AsyncStorage.getItem("jwt")
        .then((res) => {
            axios 
            .get(`${baseURL}users/${context.stateUser.user.userId}`,{
                headers: { Authorization: `Bearer ${res}` },
            })
            .then((user) => setUserProfile(user.data))
        })
        .catch((error) => console.log(error))

        return () => {
            setUserProfile();
        }

    },[context.stateUser.isAuthenticated])
//////

    return(
        
        
        <Container style={styles.container}>



            <View style={styles.subContainer}>
               

                <View style={{marginTop:20}}>
                
                <Text style={styles.user}>
                

                {userProfile ? userProfile.firstName:""} {userProfile ? userProfile.secondName:""}
                
                  </Text>
                <Text style={styles.age}>
                Age: {userProfile ? userProfile.age: ""}
                </Text>
                <Text style={styles.gender}>
                Gender : {userProfile ? userProfile. gender: ""}
                   </Text>
                   <Text style={styles.address}>
                Address : {userProfile ? userProfile. address: ""}
                   </Text>
                   <Text style={styles.type}>
                Epilepsy Type : {userProfile ? userProfile. type: ""}
                   </Text>
                   <Text style={styles.history}>
                History : {userProfile ? userProfile. history: ""}
                   </Text>
                </View>
                


                <View style={ styles.SObutton }>
                    <Button title={"Sign Out"} color={"white"} onPress={() => [
                        AsyncStorage.removeItem("jwt"),
                        logoutUser(context.dispatch)
                    ]}/>
               </View>


            </View>
        </Container>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    subContainer: {
        marginLeft: 75,
        
    },
    SObutton:{
        width: "80%",
    alignItems: "center",
    fontWeight: "bold",
         fontSize: 12, 
         textAlign: 'center',
         color: 'white',
         width: 100,
         backgroundColor: '#30bca4',
         borderRadius: 50,
         padding: 7,
         marginLeft: 100,
         marginTop: 10
    },
    order: {
        marginTop: 20,
        alignItems: "center",
        marginBottom: 60
    },
    container1: {
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
    user: {
        fontSize: 28,
       textAlign: 'center',
       color: 'grey',
       fontWeight: 'bold',
       padding: 10,
       
    },
   age: {
       fontWeight: "bold",
        fontSize: 14, 
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#021831',
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
        backgroundColor: '#021831',
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
        backgroundColor: '#021831',
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
        backgroundColor: '#021831',
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
        backgroundColor: '#021831',
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


export default UserProfile ;