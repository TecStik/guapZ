import {React,  useState,useContext } from "react";
import StoreContext from '../screens/GlobalState'
import { View, StyleSheet } from 'react-native';

import BigAppButton from '../components/BigAppButton';

function OptionScreenComponent(props) {
    const contextData = useContext(StoreContext);

    const handleThematicPortfolios=()=>{
        console.log('handleThematicPortfolios');
        contextData.setOption(1);
     //   props.navigation.navigate("select Theme");
    }

    const handleGoalBaseInvestment=()=>{
        console.log('handleGoalBaseInvestment');
        contextData.setOption(2);
      //  props.navigation.navigate("select Goal");
    }

    return (
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
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-evenly'
      },
});

export default OptionScreenComponent;