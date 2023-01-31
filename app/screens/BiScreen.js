import React from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import BackContainer from '../components/BackContainer';
import Banner from '../components/Banner';
import Frequency from '../components/Frequency';
import RiskAssessmentResult from '../components/RiskAssessmentResult';
import Screen from '../components/Screen';
import TargetAmount from '../components/TargetAmount';
import TimeHorizon from '../components/TimeHorizon';

function BiScreen(props) {
  return (
    <Screen>
        <BackContainer/>
        <Banner/>
        <ScrollView>
            {/* <TimeHorizon/> */}
            {/* <TargetAmount/> */}
            {/* <Frequency/> */}
            <RiskAssessmentResult/>
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