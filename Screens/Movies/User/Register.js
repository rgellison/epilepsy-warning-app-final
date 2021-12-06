import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import FormContainer from '../../../Shared/FormContainer';
import Error from '../../../Shared/Error';
import  Input from "../../../Shared/Input" 
import Toast from "react-native-toast-message";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import axios from "axios";

import baseURL from "../../../assets/common/baseUrl";


const Register = (props) => {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
     const [patientHistory, setPatientHistory] = useState("");
   
    const [error, setError] = useState("");

/// set up validaiton

const register = () => {
    if (firstName === ""|| secondName === ""|| email === ""|| password === "" || age === "" || gender === "" || address === "" || patientHistory
     === ""   

     )
     {
      setError("Please fill all the fields");
    }

//setting up HTTP method to create new users 
    let user = {
      firstName: firstName,
      secondName: secondName,
      email: email,
      password: password,
      age: age,
      gender: gender,
      address:address,
      patientHistory:patientHistory,
      isAaming: false,
      
    };
    
    axios
    .post(`${baseURL}users/register`, user)
    .then((res) => {
      if (res.status == 200) {
        Toast.show({
          topOffset: 60,
          type: "success",
          text1: "user has been registred successfully ",
          text2: "Please Login into your account",
        });
        setTimeout(() => {
          props.navigation.navigate("Login");
        }, 500);
      }
    })
    .catch((error) => {
      Toast.show({
        topOffset: 60,
        type: "error",
        text1: "Something went wrong",
        text2: "Please try again",
      });
    });
};



    return(
        <View>
           <KeyboardAwareScrollView viewIsInsideTabBar={true}
           extraHeight={200}
           enableOnAndroid={true}
           >
               <FormContainer title={"Register-Patient"}>
                   <Input 
                   placeholder={" Enter Patient Name"}
                   name={"firstName"}
                   id={"firstName"}
                  onChangeText={(text) => setFirstName(text.toLowerCase())}

                   />
                    <Input 
                   placeholder={" Enter Patient second Name"}
                   name={"secondName"}
                   id={"secondName"}
                  onChangeText={(text) => setSecondName(text.toLowerCase())}

                   />

                   <Input
                   placeholder={"Enter Patient Email"}
                   name={"email"}
                   id={"email"}

                
                  onChangeText={(text) => setEmail(text)}

                   />
                   
                   <Input
                   placeholder={"Password"}
                   name={"password"}
                   id={"password"}

                   secureTextEntry={true}
                  onChangeText={(text) => setPassword(text)}

                   />

                   <Input 
                   placeholder={"Enter Patient Age"}
                   name={"age"}
                   id={"age"}
                   keyboardType={"numeric"}
                  onChangeText={(text) => setAge(text)}

                   />

                  <Input
                   placeholder={"Enter Patient gender"}
                   name={"gender"}
                   id={"gender"}

                
                  onChangeText={(text) => setGender(text)}

                   />
                    <Input
                   placeholder={"Enter Patient address"}
                   name={"address"}
                   id={"address"}

                
                  onChangeText={(text) => setAddress(text)}

                   />
                    <Input
                   placeholder={"Enter Patient patientHistory"}
                   name={"patientHistory"}
                   id={"patientHistory"}

                
                  onChangeText={(text) => setPatientHistory(text)}

                   />
                   
                
                   
                   <View>

                   {error ? <Error message={error} /> : null}
                   </View>

                   <View style={styles.buttonGroup}>
          <Button title={"Register"} color={"white"}
        onPress={()=>register()}  
          />
        </View>

        <View style={styles.buttonGroup1}>
             <Button title={"Back to Login"} color={"white"} onPress={

               () => props.navigation.navigate("Login")
             }/>
              </View>
               </FormContainer>

           </KeyboardAwareScrollView>

        </View>

    )
}

const styles = StyleSheet.create({
    buttonGroup: {
    alignItems: "center",
    fontWeight: "bold",
         fontSize: 12, 
         textAlign: 'center',
         color: 'white',
         width: 100,
         backgroundColor: '#30bca4',
         borderRadius: 50,
         padding: 7,
         marginLeft: 0,
         marginTop: 10
    },
    buttonGroup1: {
      alignItems: "center",
      fontWeight: "bold",
           fontSize: 12, 
           textAlign: 'center',
           color: 'white',
           width: 150,
           backgroundColor: '#Ec4b4b',
           borderRadius: 50,
           padding: 7,
           marginLeft: 0,
           marginTop: 10
      },
  });
  

export default Register;

