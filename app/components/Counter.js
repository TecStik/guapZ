import React from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './AppText';

function Counter({ counter, increase, decrease }) {
  return (
    <View style={styles.container}>
        
        <View style={styles.display}>
            <AppText style={styles.heading}>
                {counter}
            </AppText>

        </View>

        <View style={styles.button}>
            <TouchableOpacity onPress={increase} style={styles.topButton}>
                <MaterialCommunityIcons name={'chevron-up-box'} color={'#A1C6FF'} size={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={decrease} style={styles.bottomButton}>
                <MaterialCommunityIcons name={'chevron-down-box'} color={'#A1C6FF'} size={50} />
            </TouchableOpacity>


        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  display:{
    width: 100,
    height: 100,
    borderRadius: 25,
    borderWidth: 2,
    backgroundColor: '#CFD9E8',
  },
  button:{
    width: 50,
    height: 100,
    // backgroundColor: 'blue',
  },
  topButton:{
    width: 50,
    height: 50,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButton:{
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  heading:{
    fontSize: 50,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default Counter;