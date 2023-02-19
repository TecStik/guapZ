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


import E_WalletScreen from "../screens/E_WalletScreen";// E Wallet plan
import AboutYourSelfScreen from "../screens/AboutYourSelfScreen";// E Wallet plan
import FundYourAccountScreen from "../screens/FundYourAccountScreen";// funding the account
import InvestmentPlanSummaryScreen from "../screens/InvestmentPlanSummaryScreen";// Plan Summary
import PortFolioPositionScreen from "../screens/PortFolioPositionScreen";// Portfolio Position
//import aa  from "../screens/";// Portfolio Position





const Stack = createNativeStackNavigator();

const AuthNavigator=()=> (
    <Stack.Navigator>
                 <Stack.Screen name='TVM' component={BiScreen} options={{headerShown: false}} />
                         <Stack.Screen name='Investment Plan SummaryScreen' component={InvestmentPlanSummaryScreen} options={{headerShown: false}} />
         <Stack.Screen name='Risk Questionaire' component={RiskQuestionaire} options={{headerShown: false}} />

                 <Stack.Screen name='Adjust Portfolio' component={AdjustmentPlanScreen} options={{headerShown: false}} />
                         <Stack.Screen name='PortFolioPositionScreen' component={PortFolioPositionScreen} options={{headerShown: false}} />


                 <Stack.Screen name='E Wallet' component={E_WalletScreen} options={{headerShown: false}} />
                                 <Stack.Screen name='FundYourAccountScreen' component={FundYourAccountScreen} options={{headerShown: false}} />

                         <Stack.Screen name='About yoursef' component={AboutYourSelfScreen} options={{headerShown: false}} />



                 <Stack.Screen name='Redemption' component={NormalRedemptionScreen} options={{headerShown: false}} />

        <Stack.Screen name='Option Screen' component={OptionScreen} options={{headerShown: false}} />
        <Stack.Screen name='select Goal' component={MultipleChoiceScreen} options={{headerShown: false}}/>

        <Stack.Screen name='select Theme' component={MultipleOptionScreen} options={{headerShown: false}}/>
        
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Set Goals' component={RegisterScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
)

export default AuthNavigator;