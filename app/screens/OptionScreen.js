import React from 'react';

import { View, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import BackContainer from '../components/BackContainer';
import Banner from '../components/Banner';
import BigAppButton from '../components/BigAppButton';
import GuazBackContainer from '../components/GuazBackContainer';
import Screen from '../components/Screen';

function OptionScreen(props) {

    const handleThematicPortfolios=()=>{
        console.log('handleThematicPortfolios')
    }

    const handleGoalBaseInvestment=()=>{
        console.log('handleGoalBaseInvestment')
    }

  return (
    <Screen>
        <GuazBackContainer/>
        <View style={styles.container}>
            <BigAppButton
                title={'Thematic Portfolios'}
                onPress={handleThematicPortfolios}
            />
            <BigAppButton
                title={'Goal Base Investment'}
                onPress={handleGoalBaseInvestment}
            />
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-evenly'
  },
});

export default OptionScreen;