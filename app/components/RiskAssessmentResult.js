import React, { useState,useContext } from 'react';
import StoreContext from '../screens/GlobalState';

import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import Counter from './Counter';
import AppButton from './AppButton';

function RiskAssessmentResult(props) {
    const contextData = useContext(StoreContext);
   
    const [count, setCount] = useState(contextData.riskScore);

    const handleProceed=()=>{
        console.log(count)
    }

    const handleUp=()=>{
        if (count <10){
            setCount(count+1);
        }
    }
    const handleDown=()=>{
        if (count >0){
            setCount(count-1);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AppText style={styles.heading}>
                    Risk Assessment Result
                </AppText>
            </View>


            <View style={styles.counterContainer}>
                <View style={styles.display}>
                    <AppText style={styles.number}>
                        {count}
                    </AppText>

                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={handleUp} style={styles.topButton}>
                        <MaterialCommunityIcons name={'chevron-up-box'} color={'#A1C6FF'} size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDown} style={styles.bottomButton}>
                        <MaterialCommunityIcons name={'chevron-down-box'} color={'#A1C6FF'} size={50} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{height: 50}}>
                <AppText>Out of 10, can adjust upto two nothches</AppText>
            </View>
            <View style={{width: '80%',}}>
                <AppButton
                    title={'Proceed'}
                    onPress={handleProceed}
                />
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        // backgroundColor: 'red',
        alignItems: 'center',
    },
    header:{
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'orange',
        width: '100%',
        height: 80,
        marginBottom: 30,
    },
    heading:{
        fontWeight: 'bold',
        fontSize: 22,
    },
    counterContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: 'pink',
        margin: 20,
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
    number:{
        fontSize: 50,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});

export default RiskAssessmentResult;