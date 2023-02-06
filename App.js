import { useState,useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';


import Banner from './app/components/Banner';
import { StoreProvider } from './app/screens/GlobalState';

import ImageAppButton from './app/components/ImageAppButton';
import BiScreen from './app/screens/BiScreen';
import  RiskQuestionaire from './app/screens/RiskQuestionaire';
import MultipleChoiceScreen from './app/screens/MultipleChoiceScreen';
import MultipleOptionScreen from './app/screens/MultipleOptionScreen';
import OptionScreen from './app/screens/OptionScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import InvestmentPlanSummaryScreen from './app/screens/InvestmentPlanSummaryScreen';
import GuazBackContainer from './app/components/GuazBackContainer';
import AdjustmentPlanScreen from './app/screens/AdjustmentPlanScreen';
import SliderComponent from './app/components/SliderComponent';
import AboutYourSelfScreen from './app/screens/AboutYourSelfScreen';
import FundYourAccountScreen from './app/screens/FundYourAccountScreen';
import E_WalletScreen from './app/screens/E_WalletScreen';
import PortFolioPositionScreen from './app/screens/PortFolioPositionScreen';
import ReportScreen from './app/screens/ReportScreen';
import AuthNavigator from './app/navigation/AuthNavigator';

export default function App() {
  const [goals,setGoals]= useState(["testing"]);
  const [step,setStep]= useState(3);

  return (
    // <Banner/>
    // <ImageAppButton/>
    // <GuazBackContainer/>
    // <SliderComponent/>

    // <RegisterScreen/>
    // <OptionScreen/>
    // <MultipleOptionScreen/>
    // <MultipleChoiceScreen/>
    // <AdjustmentPlanScreen/>
    // <AboutYourSelfScreen/>
    // <FundYourAccountScreen/>
    // <E_WalletScreen/>
    // <PortFolioPositionScreen/>
    // <ReportScreen/>

//     <StoreProvider value={{  goals,setGoals,step,setStep }}>
// < RiskQuestionaire/>
//      <BiScreen/>
//      <InvestmentPlanSummaryScreen/>
//     </StoreProvider>

    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>



  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
