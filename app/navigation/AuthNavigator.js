import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "../screens/RegisterScreen";
import OptionScreen from "../screens/OptionScreen";



const Stack = createNativeStackNavigator();

const AuthNavigator=()=> (
    <Stack.Navigator>
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Option Screen' component={OptionScreen} options={{headerShown: false}} />
    </Stack.Navigator>
)

export default AuthNavigator;