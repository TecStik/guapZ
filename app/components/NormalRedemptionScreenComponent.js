import React from 'react';

import { View, StyleSheet, ScrollView, TextInput } from 'react-native';
import AppText from '../components/AppText';


import PickerList from '../components/PickerList';
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

function NormalRedemptionScreenComponent(props) {
    return (
        <>
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

                <View style={styles.underLine}>
                    <View style={{width: '60%'}}>
                        <AppText style={{ fontWeight: 'bold' }}>
                            Current Unit Balance
                        </AppText>
                    </View>
                    <View style={{width: '40%'}}>
                        <AppText style={{ textAlign: 'right', fontWeight: 'bold'}}>
                            world
                        </AppText>
                    </View>
                </View>

                <View style={styles.underLine}>
                    <View style={{width: '60%'}}>
                        <AppText style={{ fontWeight: 'bold' }}>
                            Available Units
                        </AppText>
                    </View>
                    <View style={{width: '40%'}}>
                        <AppText style={{ textAlign: 'right', fontWeight: 'bold'}}>
                            world
                        </AppText>
                    </View>
                </View>

                <View style={styles.underLine}>
                    <View style={{width: '60%'}}>
                        <AppText style={{ fontWeight: 'bold' }}>
                            Balance*
                        </AppText>
                    </View>
                    <View style={{width: '40%'}}>
                        <AppText style={{ textAlign: 'right', fontWeight: 'bold'}}>
                            world
                        </AppText>
                    </View>
                </View>

                <AppText style={{width: '95%', alignSelf: 'center', paddingVertical: 10 }}>
                    *Balance in PKR is based on last working day's redemption price.
                </AppText>
                
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


            </ScrollView>
        </>
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
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        width: '90%',
        alignSelf: 'center',
        borderBottomColor: '#053E94',
        flexDirection: 'row',
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
    },
});

export default NormalRedemptionScreenComponent;