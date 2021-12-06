import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome";

//Hello
//Stacks
import HomeNavigator from "./HomeNavigator";
import AdminNavigator from "./AdminNavigator";
import EpilepsyInfo from "./EpilepsyInfo";
import UserNavigator from "./UserNavigator";
import UserProfile from "../Screens/Movies/User/UserProfile";
import AuthGlobal from "../Context/AuthGlobal";
import Register from "../Screens/Movies/User/Register";

const Tab = createBottomTabNavigator();

const Main = () => {

    const context = useContext(AuthGlobal)

    return (
        <Tab.Navigator
            initialRouteName= "Home"
            tabBarOptions= {{
                    KeyboardHidesTabBar: true, 
                    showLabel: false, 
                    activeTintColor: 'lightblue'
            }}
        >
           <Tab.Screen 
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            name="home"
                            style={{ position: "relative" }}
                            color={color}
                            size={30}
                        />
                    )
                }}

           />   
             <Tab.Screen 
                name="Login"
                component={UserNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            name="user-circle"
                            style={{ position: "relative" }}
                            color={color}
                            size={30}
                        />
                    )
                }}

           /> 




           

<Tab.Screen
///// we should have a regiser form here as well // think about it 

// this patient information page
                name="patient Info"
                component={UserProfile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            name="info"
                            style={{ position: "relative" }}
                            color={color}
                            size={30}
                        />
                    )
                }}

           /> 

<Tab.Screen

// EpilepsyInfo 
// If user is admin analytics button will show on nav bar
                name="EpilepsyInfo"
                component={EpilepsyInfo}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            name="question"
                            style={{ position: "relative" }}
                            color={color}
                            size={30}
                        />
                    )
                }}

           /> 

{context.stateUser.user.isAaming == true ? (
<Tab.Screen
// Create Account
// Admin can create a patient account
                name="Register"
                component={Register}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon 
                            name="user-plus"
                            style={{ position: "relative" }}
                            color={color}
                            size={30}
                        />
                    )
                }}

           /> 
           ) : null }









           {context.stateUser.user.isAaming == true ? (
            <Tab.Screen
           name="Admin"
           component={AdminNavigator}
           options={{
               tabBarIcon: ({ color }) => (
                   <Icon name="cog" color={color} size={30} />
                   
               )
           }}
/>


           ) : null }

{/* {context.stateUser.user.isAaming == true ? (
            <Tab.Screen
           name="Register"
           component={Register}
           options={{
               tabBarIcon: ({ color }) => (
                   <Icon name="user-circle" color={color} size={30} />
               )
           }}
/>  */}
           
            </Tab.Navigator>


            
    )
}

export default Main;