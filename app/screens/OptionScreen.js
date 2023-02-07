import React from 'react';

import { View, StyleSheet } from 'react-native';

import BigAppButton from '../components/BigAppButton';
import GuazBackContainer from '../components/GuazBackContainer';
import Screen from '../components/Screen';

function OptionScreen(props) {

    const handleThematicPortfolios=()=>{
        console.log('handleThematicPortfolios');
        props.navigation.navigate("select Theme");
    }

    const handleGoalBaseInvestment=()=>{
        console.log('handleGoalBaseInvestment');
        props.navigation.navigate("select Goal");
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