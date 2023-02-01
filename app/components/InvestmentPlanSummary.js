import React from 'react';

import { View, StyleSheet } from 'react-native';
import AppButton from './AppButton';
import AppText from './AppText';

function InvestmentPlanSummary(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AppText style={styles.heading}>
                    Risk Assessment Result
                </AppText>
            </View>

            <View style={styles.table}>
                <View style={[styles.row, {backgroundColor: '#CFD9E8'}]}>
                    <View style={styles.leftColumn}>
                        <AppText style={{fontWeight: 'bold', textAlignVertical: 'center',}}>
                            Target Amount
                        </AppText>
                    </View>
                    <View style={styles.rightColumn}>
                        <AppText style={{textAlignVertical: 'center'}}>
                            USD
                        </AppText>
                    </View>    
                </View>
                <View style={[styles.row, {backgroundColor: 'white'}]}>
                    <View style={styles.leftColumn }>
                        <AppText style={{fontWeight: 'bold', textAlignVertical: 'center',}}>
                            Time Period
                        </AppText>
                    </View>
                    <View style={styles.rightColumn}>
                        <AppText style={{textAlignVertical: 'center'}}>
                            XX Months
                        </AppText>
                    </View>    
                </View>
                <View style={[styles.row, {backgroundColor: '#CFD9E8'}]}>
                    <View style={styles.leftColumn}>
                        <AppText style={{fontWeight: 'bold', textAlignVertical: 'center',}}>
                            Monthly Payment
                        </AppText>
                    </View>
                    <View style={styles.rightColumn}>
                        <AppText style={{textAlignVertical: 'center'}}>
                            XXX USD/Month
                        </AppText>
                    </View>    
                </View>
            </View>

            <View style={styles.detail}>
                <AppText>
                    You preferred monthly contribution of USD is insufficient to achieve your target goal, {"\n"}
                    You should either {"\n"}
                    {"\u2160"}.    Increase your Monthly Contribution{"\n"}
                    {"\u2161"}.   Defer your plan{"\n"}
                    {"\u2162"}.  Opt for a lesser targeted amount{"\n"}
                </AppText>

            </View>
            <AppButton
                title={'Adjust'}
            />
        </View>
  );
}

const styles = StyleSheet.create({
    container:{},
    header:{
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'orange',
        width: '100%',
        height: 50,
        marginBottom: 30,
    },
    heading:{
        fontWeight: 'bold',
        fontSize: 22,
    },
    table:{
        width: '100%',
        height: 120,
        borderWidth: 2,
        borderColor: '#053E94',
        // backgroundColor: 'red',
        justifyContent: 'space-between',
    },
    row:{
        width: '100%',
        height: '33.3%',
        flexDirection: 'row',
        borderTopWidth: 2,
        borderColor: '#053E94',
        // backgroundColor: 'pink',
    },
    leftColumn:{
        width: '55%',
        height: '100%',
        paddingLeft: 10,
        // backgroundColor: 'orange',
    },
    rightColumn:{
        width: '45%',
        height: '100%',
        // backgroundColor: 'green',
    },
    detail:{
        padding: 5,
    }
});

export default InvestmentPlanSummary;