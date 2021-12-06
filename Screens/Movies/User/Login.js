import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import FormContainer from "../../../Shared/FormContainer";
import Error from "../../../Shared/Error";
import EasyButton from "../../../Shared/EasyButton";
import  Input from "../../../Shared/Input" 

// Context
import AuthGlobal from "../../../Context/AuthGlobal";
import { loginUser } from "../../../Context/Auth.actions"
import { Tab } from "react-native-elements/dist/tab/Tab";

const Login = (props) => {
  const context = useContext(AuthGlobal);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (context.stateUser.isAuthenticated === true) {
      props.navigation.navigate("User Profile");
    }
  }, [context.stateUser.isAuthenticated]);

  const handleSubmit = () => {
    const user = {
      email,
      password
    }

    if (email === "" || password === "") {
      setError("Please fill in your credentials");
    } else {
      loginUser(user, context.dispatch)
    }
  }

  
  return (
    <FormContainer title={"Please login"}>
      <Input style={styles.input1}
        placeholder={"Enter Email"}
        name={"email"}
        id={"email"}
        value={email}
        onChangeText={(text) => setEmail(text.toLowerCase())}
      />
      <Input
        placeholder={"Enter Password"}
        name={"password"}
        id={"password"}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {error ? <Error message={error} /> : null}
      <View style={styles.buttonGroup}>
      
       <Button title="Enter" color="white"  onPress={() =>handleSubmit()} />
       
      </View>
      {context.stateUser.user.isAaming == true ? ( 
      <View style={[{ marginTop: 40 }]}>
        <Text style={styles.middleText}>Don't have an account yet?</Text>
        <Button title="Register" onPress={
          () => props.navigation.navigate("Register")}/>
        
      </View>
          ) : null }
    </FormContainer>
       
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
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
         marginLeft: 0,
         marginTop: 10

  },
  middleText: {
    marginBottom: 20,
    alignSelf: "center",
  }
})

export default Login;