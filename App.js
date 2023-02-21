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
import {FVofAnnuity,AnnuityofFV} from './app/screens/supportingfiles/helperFunctions'
import FundYourAccountScreen from './app/screens/FundYourAccountScreen';
import E_WalletScreen from './app/screens/E_WalletScreen';
import PortFolioPositionScreen from './app/screens/PortFolioPositionScreen';
import ReportScreen from './app/screens/ReportScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import PickerList from './app/components/PickerList';
import NormalRedemptionScreen from './app/screens/NormalRedemptionScreen';
import TickBox from './app/components/TickBox';
import NormalRedemptionScreen2 from './app/screens/NormalRedemptionScreen2';
import FundComponent from './app/components/FundComponent';
import FundComponentListScreen from './app/components/FundComponentListScreen';

export default function App() {
  const [goals,setGoals]= useState(["testing"]);
  const [step,setStep]= useState(0);
  const [riskScore,setRiskScore]= useState(0);
  const [futValue,setFutValue]= useState(1000);
  const [tHorizon,setTHorizon]= useState(120);
  const [frequency,setFrequency]= useState({label:"Month",value:12});
  const [pmt,setPmt]= useState(100);
  const [InitCont,setInitCont]= useState(0);
  const [profitRate,setProfitRate]= useState(0.0);
  const [fund,setFund]= useState(null);


  useEffect(() => {
  const expVal=FVofAnnuity(10,frequency.value,tHorizon/frequency.value,pmt);
   console.log("Expected FV",10,frequency.value,tHorizon/frequency.value,pmt,expVal)
       
       }, [frequency,tHorizon,pmt])

  return (
    // <Banner/>
    // <ImageAppButton/>
    // <GuazBackContainer/>
    // <SliderComponent/>
    // <PickerList/>
    // <TickBox/>
    // <FundComponent/>
    // <FundComponentListScreen/>


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
    // <NormalRedemptionScreen/>
   // <NormalRedemptionScreen2/>

    <StoreProvider value={{  goals,setGoals,step,setStep,riskScore,setRiskScore,futValue,setFutValue,tHorizon,setTHorizon,frequency,setFrequency,profitRate,setProfitRate,fund,setFund }}>
  <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
    </StoreProvider>

  



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
