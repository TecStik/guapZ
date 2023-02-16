import React from 'react';

import { View, StyleSheet, Dimensions, TextInput, ScrollView } from 'react-native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

const {height, width}= Dimensions.get('window');

function E_WalletScreenComponent(props) {
    
    const [number, setNumber] = React.useState('');

    const handleWithdraw=()=>{
        console.log('handleWithdraw')
    }
    const handleTopUp=()=>{
        console.log('handleTopUp')
    }

    return (
        <ScrollView>
            <View style={styles.display}>
                <AppText style={styles.header}>
                    E Wallet
                </AppText>
                <TextInput
                    style={styles.input}
                    onChangeText={setNumber}
                    value={number}
                    placeholder='Enter Amount'
                    keyboardType='Numeric'
                />
            </View>


            <AppButton
                title={'Withdraw'}
                onPress={handleWithdraw}
            />
            <AppButton
                title={'Top Up'}
                onPress={handleTopUp}
            />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{},
    display:{
        alignItems: 'center',
        marginVertical: height*0.1,
    },
    input:{
        width: width*0.6,
        height: height*0.10,
        borderRadius: 25,
        margin: 12,
        borderWidth: 3,
        padding: 10,
        fontSize: 30,
    },
    header: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '900',
    },
});

export default E_WalletScreenComponent;