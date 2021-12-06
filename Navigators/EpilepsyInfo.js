import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity, ScrollView, ListItem
} from "react-native";
 
export default function App() {

 
  return (
    <ScrollView>
    <View style={styles.container}></View>
        <Image style={styles.image1} source={require('../assets/Images/epilepsy-banner.png')} />
   <Text style={styles.header}> What is Epilepsy? </Text>
   <Text style={styles.text1}>Epilepsy is usually only diagnosed after a person has had more than one seizure and not all seizures are due to epilepsy. Epilepsy can happen in people of all ages, races and social classes. Epilepsy is most commonly diagnosed in children and in people over 65. There are over half a million people with epilepsy in the UK, so around 1 in 100 people. Other conditions that can look like epilepsy include fainting, or very low blood sugar in some people being treated for diabetes. On this page, when we use the term 'seizure' we mean epileptic seizure.</Text>

      {/* <StatusBar style="auto" /> */}
      <View style={styles.container}>
      
       </View>

<View>
       <Text style={styles.header}> Types of seizures: </Text>
       <Text style={styles.text1}>Focal onset seizures start in, and affect, just one part of the brain, sometimes called the 'focus' of the seizures. It might affect a large part of one hemisphere or just a small area in one of the lobes. Focal onset seizures start in, and affect, just one part of the brain, sometimes called the 'focus' of the seizures. It might affect a large part of one hemisphere or just a small area in one of the lobes. Sometimes a focal onset seizure can spread to both sides of the brain (called a focal to bilateral tonic-clonic seizure). The focal onset seizure is then a warning, sometimes called an 'aura' that another seizure will happen.</Text>
       </View>

       <View>
       <Text style={styles.header}> What can trigger epilepsy? </Text>
       <Text style={styles.box}>Here are some of the seizure triggers that have been reported by people with epilepsy:</Text> 
         <Text style={styles.text1}> - Not taking epilepsy medicine as prescribed</Text>
         <Text style={styles.text1}> - Feeling tired and not sleeping well</Text> 
         <Text style={styles.text1}> - Stress, Alcohol and recreational drugs</Text>
         <Text style={styles.text1}> - Flashing or flickering lights</Text>
         <Text style={styles.text1}> - Monthly periods, Missing meals</Text> 
         <Text style={styles.text1}> - Having an illness which causes a high temperature</Text>
       </View>
       </ScrollView>
   
 
  
   
  );
}
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image1: {
    margin: 20,
    width: '90%',
    
  },
 
  inputView: {
    backgroundColor: "#a1a1a1",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20,
    backgroundColor: "#5e5c5c",
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize:25,
    color:'#30bca4',
    textAlign: 'center',
    padding: 15
  },
  box: {
    color: 'white',
         color: '#30bca4',
         backgroundColor: '#021831',
         margin: 20,
         opacity: 0.7,
         padding: 20,
         marginTop: 0
  },
  text1:{
    paddingLeft: 20,
    paddingRight: 20
  }
});