import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "../Screens/Movies/User/Login"
import Register from "../Screens/Movies/User/Register"
import Analytics from "../Screens/Movies/Admin/Analytics"
// import Movies from "../Screens/Movies/Admin/Movies"
import MovieForm from "../Screens/Movies/Admin/MovieForm"
import Categories from "../Screens/Movies/Admin/Categories"

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Analytics"
                component={Analytics}
                options={{
                    title:"Analytics Details"
                }}
            />

        <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
             <Stack.Screen 
                name="Register"
                component={Register}
                options={{
                    headerShown: false
                }}
            />




            
            {/* <Stack.Screen name="Categories" component={Categories} /> */}
             {/* <Stack.Screen name="Analytics" component={Analytics} />  */}
             <Stack.Screen name="MovieForm" component={MovieForm} />
             {/* <Stack.Screen name="UsersForm" component={UsersForm} /> */}


        </Stack.Navigator>
    )
}

export default function AdminNavigator() {
    return <MyStack />
}