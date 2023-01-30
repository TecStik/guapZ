import React, { useState,useContext } from 'react';

import { View, StyleSheet, Image } from 'react-native';
import AppButton from './AppButton';
import AppText from './AppText';
import AppTextInput from './AppTextInput';
import StoreContext from '../screens/GlobalState';


function TimeHorizon(props) {
  const contextData = useContext(StoreContext);
    const [value, setValue] =useState('');

    const handleProceed=()=>{
        console.log(value);
        const nextstep=parseInt(contextData.step)+1
        contextData.setStep(nextstep);
    }

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.rightContainer}>
                <Image
                    source={require('../assets/custom.png')}
                    style={{width: 50, height: 50}}
                />
            </View>
        </View>
        <View style={{width: '100%', height: 50, alignItems: 'center'}}>
            <AppText>
                What is your target time Horizon?
            </AppText>
        </View>
        <AppTextInput
            icon='cash-multiple'
            placeholder={'Time Horizon'}
            keyboardType='numeric'
            value={value}
            onChangeText={setValue}
        />
        <AppButton
            title={'Proceed'}
            onPress={handleProceed}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // backgroundColor: 'red',
  },
  header:{
    width: '100%',
    height: 80,
    marginBottom: 30,
    // backgroundColor: 'pink',
  },
  rightContainer:{
    width: 80,
    height: 80,
    // backgroundColor: 'yellow',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TimeHorizon;