import react,{Component} from 'react'
import {StatusBar} from "expo-status-bar"
import {StyleSheet, Text, TouchableOpacity,View} from "react-native"
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from "./screens/HomeScreen"
import EntryScreen from "./screens/EntryScreen"
import WheelScreen from "./screens/WheelScreen"

const Stack= createNativeStackNavigator()

export default class App extends Component{
    render(){
        return(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="EntryScreen" component={EntryScreen}/>
            <Stack.Screen name="WheelScreen" component={WheelScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
        )  
    }
}
