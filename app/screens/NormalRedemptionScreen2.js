import React from 'react';

import { View, StyleSheet, ScrollView, TextInput } from 'react-native';
import AppText from '../components/AppText';


import GuazBackContainer from '../components/GuazBackContainer';
import PickerList from '../components/PickerList';
import Screen from '../components/Screen';
import TickBox from '../components/TickBox';



const values = [
    {key:'1', value:'Mobile',},
    {key:'2', value:'Appliance'},
    {key:'3', value:'Camera'},
    {key:'4', value:'Computer'},
    {key:'5', value:'Vegetables'},
    {key:'6', value:'Diary Products'},
    {key:'7', value:'Drinks'},
]


function NormalRedemptionScreen2(props) {
    return (
        <Screen>
            <GuazBackContainer/>
            <View style={{height: 50,}}>
                <AppText style={styles.header}>
                    Normal Redemption
                </AppText>

            </View>
            <ScrollView>
                <View style={{}}>
                    <PickerList
                        placeHolder={'Select Account'}
                        values={values}
                    />
                    <PickerList
                        placeHolder={'Select Fund'}
                        values={values}
                    />
                </View>
                
                <View style={styles.checkBox}>
                    <View style={{width: '50%',}}>
                        <TickBox
                            title={'Amount'}
                        />
                    </View>
                    <View style={{width: '50%',}}>
                        <TextInput
                            placeholder='Type Quantity'
                            keyboardType="numeric"
                            style={styles.input}
                        />
                    </View>
                </View>

                <View style={styles.checkBox}>
                    <View style={{width: '50%',}}>
                        <TickBox
                            title={'Unit'}
                        />
                    </View>
                    <View style={{width: '50%',}}>
                        <TextInput
                            placeholder='Type Quantity'
                            keyboardType="numeric"
                            style={styles.input}
                        />
                    </View>
                </View>

                <View style={styles.checkBox}>
                    <View style={{width: '50%', }}>
                        <TickBox
                            title={'Fund Transfer'}
                        />
                    </View>
                    <View style={{width: '50%', }}>
                        <TextInput
                            placeholder='Type Quantity'
                            keyboardType="numeric"
                            style={styles.input}
                        />
                    </View>
                </View>
                
                <View style={styles.underLine}>
                    <View style={{ borderBottomWidth: 2, borderBottomColor: '#053E94'}}>
                        <AppText style={{fontStyle: 'italic', fontWeight: 'bold'}}>
                            Notes and Disclaimer
                        </AppText>
                    </View>

                    <View style={{ borderBottomWidth: 2, borderBottomColor: '#053E94'}}>
                        <AppText style={{fontStyle: 'italic', fontWeight: 'bold'}}>
                            View Limit Matrix
                        </AppText>
                    </View>
                </View> 

                <View style={{width: '95%', alignSelf: 'center'}}>
                    <View style={{ borderWidth: 2, borderColor: '#053E94', backgroundColor: '#CFD9E8', paddingHorizontal: 10}}>
                        <AppText style={{ fontWeight: 'bold'}}>
                            Mode of Payment
                        </AppText>
                    </View>
                    <TickBox
                        title={'Online Transfer'}
                    />
                    <TickBox
                        title={'Cheque'}
                    />
                    <TickBox
                        title={'Demand Draft'}
                    />
                </View>


            </ScrollView>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{},
    header: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '900',
    },
    underLine:{
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginVertical: 25
    },
    checkBox:{
        width: '90%',
        alignSelf: 'center', 
        flexDirection: 'row',
        marginVertical: 3,
    },
    input:{
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#053E94',
        textAlign: 'right'
    }
});

export default NormalRedemptionScreen2;