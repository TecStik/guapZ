import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "../screens/RegisterScreen";
import OptionScreen from "../screens/OptionScreen";
import BiScreen from "../screens/BiScreen";
import MultipleOptionScreen from "../screens/MultipleOptionScreen";// thematic screen
import MultipleChoiceScreen from "../screens/MultipleChoiceScreen";// Goal screen
import RiskQuestionaire from "../screens/RiskQuestionaire";// Risk Ques
import NormalRedemptionScreen from "../screens/NormalRedemptionScreen";// Redemption
import AdjustmentPlanScreen from "../screens/AdjustmentPlanScreen";// Adjustment plan

const Stack = createNativeStackNavigator();

const AuthNavigator=()=> (
    <Stack.Navigator>
                 <Stack.Screen name='Adjust Portfolio' component={AdjustmentPlanScreen} options={{headerShown: false}} />

         <Stack.Screen name='Risk Questionaire' component={RiskQuestionaire} options={{headerShown: false}} />
                 <Stack.Screen name='Redemption' component={NormalRedemptionScreen} options={{headerShown: false}} />

        <Stack.Screen name='Option Screen' component={OptionScreen} options={{headerShown: false}} />
         <Stack.Screen name='select Goal' component={MultipleChoiceScreen} options={{headerShown: false}}/>
        <Stack.Screen name='select Theme' component={MultipleOptionScreen} options={{headerShown: false}}/>
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Set Goals' component={RegisterScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
)

export default AuthNavigator;