import React from 'react';

import { View, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import BackContainer from '../components/BackContainer';
import Banner from '../components/Banner';
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
        <BackContainer/>
        <Banner/>
        <View style={styles.container}>
            <AppButton
                title={'Thematic Portfolios'}
                onPress={handleThematicPortfolios}
            />
            <AppButton
                title={'Goal Base Investment'}
                onPress={handleGoalBaseInvestment}
            />
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 0.8,
    justifyContent: 'space-around'
  },
});

export default OptionScreen;