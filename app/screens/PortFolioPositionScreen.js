import React from 'react';

import { View, StyleSheet, Dimensions } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import GuazBackContainer from '../components/GuazBackContainer';
import Screen from '../components/Screen';

const {height, width} = Dimensions.get('window');

function PortFolioPositionScreen(props) {


    const handleViewStatement=()=>{
        console.log('handleViewStatement')
    }

    return (
        <Screen>
            <GuazBackContainer/>
            <View style={styles.container}>
                <AppText style={styles.header}>
                    Portfolio Position
                </AppText>

                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.leftColumn}>
                            <AppText style={{textAlignVertical: 'center', paddingLeft: 10, fontWeight: 'bold'}}>
                                Portfolio
                            </AppText>
                        </View>
                        <View style={styles.rightColumn}>
                            <AppText style={{textAlignVertical: 'center', paddingLeft: 10, fontWeight: 'bold' }}>
                                Value
                            </AppText>    
                        </View>
                    </View>

                    <View style={[styles.tableRow, {backgroundColor: '#CFD9E8'}]}>
                        <View style={styles.leftColumn}>
                            <AppText style={{textAlignVertical: 'center', paddingLeft: 10}}>
                                Hajj Plan
                            </AppText>
                        </View>
                        <View style={styles.rightColumn}>
                            <AppText style={{textAlignVertical: 'center', paddingLeft: 10}}>
                                XXX USD
                            </AppText>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={styles.leftColumn}>
                            <AppText style={{textAlignVertical: 'center', paddingLeft: 10}}>
                                Aggressive Growth
                            </AppText>
                        </View>
                        <View style={styles.rightColumn}>
                            <AppText style={{textAlignVertical: 'center', paddingLeft: 10}}>
                                XXX USD
                            </AppText>
                        </View>
                    </View>

                </View>


            </View>

            <AppButton
                title={'View Statement'}
                onPress={handleViewStatement}
            />



            

        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        width: width,
        height: height*0.3,
        alignItems: 'center',
        marginVertical: height*0.1,
        // backgroundColor: 'red',
    },
    header: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '900',
    },
    table:{
        width: '100%',
        height: '80%',
        // backgroundColor: 'blue',
        borderWidth: 3,
    },
    tableRow:{
        width: '100%',
        height: '33.3%',
        borderBottomWidth: 2,
        // backgroundColor: 'pink',
        flexDirection: 'row',
    },
    leftColumn:{
        width: '50%',
        height: '100%',
        // backgroundColor: 'yellow',

    },
    rightColumn:{
        width: '50%',
        height: '100%',
        // backgroundColor: 'orange',
    },
});

export default PortFolioPositionScreen;