import React from 'react';

import { View, StyleSheet } from 'react-native';
import ImageAppButton from '../components/ImageAppButton';


function MultipleOptionScreenComponent(props) {

    const handleSavings=()=>{
        console.log('handleSavings')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <ImageAppButton
                    title={'Savings'}
                    image={require('../assets/wallet.png')}
                    onPress={handleSavings}
                />
                <ImageAppButton
                    title={'Stable Income'}
                    image={require('../assets/salary.png')}
                    onPress={handleSavings}
                />
            </View> 
            <View style={styles.bottomContainer}>
                <ImageAppButton
                    title={'Balanced'}
                    image={require('../assets/save_time.png')}
                    onPress={handleSavings}
                />
                <ImageAppButton
                    title={'Growth'}
                    image={require('../assets/money_growth.png')}
                    onPress={handleSavings}
                />
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 0.8,
        // backgroundColor: 'green'
    },
    topContainer:{
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        // backgroundColor: 'pink',
    },
    bottomContainer:{
        flex: 0.5,
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        // backgroundColor: 'yellow',
    },
});

export default MultipleOptionScreenComponent;