import {React,useContext,useState,useEffect} from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import BackContainer from '../components/BackContainer';
import MultiBanner from '../components/MultiBanner';
import Frequency from '../components/Frequency';
import RiskAssessmentResult from '../components/RiskAssessmentResult';
import Screen from '../components/Screen';
import TargetAmount from '../components/TargetAmount';
import TimeHorizon from '../components/TimeHorizon';
import StoreContext from './GlobalState';
import InvestmentPlanSummary from '../components/InvestmentPlanSummary';


function BiScreen(props) {
  console.log("props inbi",props);
  const contextData = useContext(StoreContext);


  return (
    <Screen>
        <BackContainer/>
        <MultiBanner/>
        <ScrollView>
          {(contextData.step=="0")?
            <TimeHorizon/>:<></>
          }
           {(contextData.step=="1")?
            <TargetAmount/> :<></>
          }
          {(contextData.step=="2")?
            <Frequency navigation={props.navigation}/> :<></>
          }
          {/* {(contextData.step=="3")?
            <RiskAssessmentResult/> :<></>
          } */}
            {/* <TargetAmount/> */}
            {/* <Frequency/> */}
            {/* <RiskAssessmentResult/> */}
            {/* <InvestmentPlanSummary/> */}
        </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container:{
    // flex: 0.5,
    // backgroundColor: 'yellow',
    // justifyContent: 'center',
    // alignItems: 'center',

  },
});

export default BiScreen;