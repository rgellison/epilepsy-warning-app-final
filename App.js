import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox } from "react-native";
//import { NativeBaseProvider, Box} from 'native-base';
//import { Text, SafeAreaView, LogBox } from 'react-native';
import SearchBar from './Shared/SearchBar'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';  /// this is not assigned ??

import Toast from "react-native-toast-message";
//navigate 
import Main from './Navigators/Main';

// Screens
import Header from './Shared/Header'

//import MovieContainer from './Screens/Movies/MovieContainer'
import { NativeBaseProvider } from 'native-base';

// Context API
import Auth from './Context/Auth';


const AppSearch = () => {
  return (
      <SearchBar />
  );
}

 LogBox.ignoreAllLogs(true);

export default function App() {
  return (

    <Auth>

<NavigationContainer>
  <NativeBaseProvider>
 
    <Header />
    <Main />
  
    <Toast ref={(ref) => Toast.setRef(ref)} />
    
    
    </NativeBaseProvider>

    </NavigationContainer>
 

    </Auth>

   
  );
}




