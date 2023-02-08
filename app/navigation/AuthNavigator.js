import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "../screens/RegisterScreen";
import OptionScreen from "../screens/OptionScreen";
import BiScreen from "../screens/BiScreen";
import MultipleOptionScreen from "../screens/MultipleOptionScreen";// thematic screen
import MultipleChoiceScreen from "../screens/MultipleChoiceScreen";// Goal screen
import RiskQuestionaire from "../screens/RiskQuestionaire";// Risk Questionaire screen
import E_WalletScreen from "../screens/E_WalletScreen";// Risk Questionaire screen

const Stack = createNativeStackNavigator();

const AuthNavigator=()=> (
    <Stack.Navigator>

            <Stack.Screen name='Risk Questionare' component={RiskQuestionaire} options={{headerShown: false}} />
        <Stack.Screen name='Option Screen' component={OptionScreen} options={{headerShown: false}} />
         <Stack.Screen name='select Goal' component={MultipleChoiceScreen} options={{headerShown: false}}/>
        <Stack.Screen name='select Theme' component={MultipleOptionScreen} options={{headerShown: false}}/>
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Set Goals' component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Bi Screen" component={BiScreen} options={{headerShown: false}}/>

                    <Stack.Screen name='E Wallet' component={E_WalletScreen} options={{headerShown: false}} />
    </Stack.Navigator>
)

export default AuthNavigator;