import React, { useState } from 'react';

import { View, StyleSheet, Image } from 'react-native';
import AppButton from './AppButton';
import AppText from './AppText';
import AppTextInput from './AppTextInput';
import ToggleButton from './ToggleButton';

function Frequency(props) {
  
    const [value, setValue] =useState('');
    
    const [monthly, setMonthly] =useState(false);
    const [quarterly, setQuarterly] =useState(false);
    const [semiAnnualy, setSemiAnnualy] =useState(false);
    const [annual, setAnnual] =useState(false);

    const handleProceed=()=>{
        console.log(value)
    }
    const handleMonthly=()=>{
      console.log('handleMonthly');
      setMonthly(true);
      setQuarterly(false);
      setSemiAnnualy(false);
      setAnnual(false);
      setValue('Monthly');
    }
    const handleQuarterly=()=>{
      console.log('handleQuarterly');
      setMonthly(false);
      setQuarterly(true);
      setSemiAnnualy(false);
      setAnnual(false);
      setValue('Quarterly');
    }
    const handleSemiAnnual=()=>{
      console.log('handleSemiAnnual');
      setMonthly(false);
      setQuarterly(false);
      setSemiAnnualy(true);
      setAnnual(false);
      setValue('Semi Annual');
    }
    const handleAnnual=()=>{
      console.log('handleAnnual');
      setMonthly(false);
      setQuarterly(false);
      setSemiAnnualy(false);
      setAnnual(true);
      setValue('Annual');
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
                Please specify payment frequency.
            </AppText>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.topContainer}>
            <ToggleButton
              title={'Monthly'}
              onPress={handleMonthly}
              color={
                      monthly?
                        'secondary'
                      :
                        'transparent'
                    }
            />
            <ToggleButton
              title={'Quarterly'}
              onPress={handleQuarterly}
              color={
                      quarterly?
                        'secondary'
                      :
                        'transparent'
                    }
            />
          </View>
          <View style={styles.bottomContainer}>
            <ToggleButton
              title={'Semi Annual'}
              onPress={handleSemiAnnual}
              color={
                      semiAnnualy?
                        'secondary'
                      :
                        'transparent'
                    }
            />
            <ToggleButton
              title={'Annual'}
              onPress={handleAnnual}
              color={
                      annual?
                        'secondary'
                      :
                        'transparent'
                    }
            />
          </View>

        </View>
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
  buttonContainer:{
    width: '100%',
    height: 150,
    justifyContent:'space-evenly',
    // backgroundColor: 'red',
  },
  topContainer:{
    width: '100%',
    // height: '50%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    // backgroundColor: 'pink',
  },
  bottomContainer:{
    width: '100%',
    // height: '50%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    // backgroundColor: 'yellow',
  },
});

export default Frequency;