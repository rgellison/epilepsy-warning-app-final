import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"


//import ProductContainer from "../Screens/Movies/MovieContainer";
import MovieContainer from "../Screens/Movies/MovieContainer";
import SingleMovie from "../Screens/Movies/SingleMovie";

const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={MovieContainer}
                options={{
                    headerShown: false,
                }}
            />
        
            <Stack.Screen 
                name='Movie Detail'
                component={SingleMovie}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <MyStack />
}