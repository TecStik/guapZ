import React from 'react';

import { View, StyleSheet, Dimensions } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import GuazBackContainer from '../components/GuazBackContainer';
import Screen from '../components/Screen';

const {height, width} = Dimensions.get('window');

function ReportScreen(props) {


    const handleViewStatement=()=>{
        console.log('handleViewStatement')
    }

    return (
        <Screen>
            <GuazBackContainer/>
            <View style={styles.container}>
                <AppText style={styles.header}>
                    Report
                </AppText>

                <View style={styles.table}>

                    <View style={[styles.tableRow, {backgroundColor: '#CFD9E8'}]}>
                        <AppText style={{textAlignVertical: 'center', textAlign: 'center', paddingLeft: 10, fontWeight: 'bold'}}>
                            Fund Manager Report
                        </AppText>            
                    </View>
                    <View style={styles.tableRow}>
                        <AppText style={{textAlignVertical: 'center', textAlign: 'center', paddingLeft: 10}}>
                            Economic Updates
                        </AppText>
                    </View>

                    
                </View>


            </View>




            

        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        width: width,
        height: height*0.2,
        alignItems: 'center',
        marginVertical: height*0.2,
        // backgroundColor: 'red',
    },
    header: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '900',
    },
    table:{
        width: '90%',
        height: '70%',
        // backgroundColor: 'blue',
        borderWidth: 3,
    },
    tableRow:{
        width: '100%',
        height: '50%',
        borderBottomWidth: 2,
        // backgroundColor: 'pink',
        flexDirection: 'row',
    },
});

export default ReportScreen;