import {React,useContext} from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import StoreContext from '../screens/GlobalState';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';


function InvestmentPlanSummaryScreenComponent({setShowPlan,handleAdjust},props) {
     const contextData = useContext(StoreContext);
    // const handleAdjust=()=>{
    //     console.log("pressed Adjust");
    //     setShowPlan(false);
    // }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <AppText style={styles.heading}>
                        Investment Plan Summary
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
                                USD{contextData.futValue}
                            </AppText>
                        </View>    
                    </View>

                                        
                    <View style={[styles.row, {backgroundColor: 'white'}]}>
                        <View style={styles.leftColumn }>
                            <AppText style={{fontWeight: 'bold', textAlignVertical: 'center',}}>
                                Expected Amount
                            </AppText>
                        </View>
                        <View style={styles.rightColumn}>
                            <AppText style={{textAlignVertical: 'center'}}>
                            USD{contextData.expVal}
                            </AppText>
                        </View>    
                    </View>
                    <View style={[styles.row, {backgroundColor: '#CFD9E8'}]}>
                        <View style={styles.leftColumn}>
                            <AppText style={{fontWeight: 'bold', textAlignVertical: 'center',}}>
                                Time Period
                            </AppText>
                        </View>
                        <View style={styles.rightColumn}>
                            <AppText style={{textAlignVertical: 'center'}}>
                                XXX Months
                            </AppText>
                        </View>    
                    </View>

                    <View style={[styles.row, {backgroundColor: 'white'}]}>
                        <View style={styles.leftColumn }>
                            <AppText style={{fontWeight: 'bold', textAlignVertical: 'center',}}>
                                Preferred Payment
                            </AppText>
                        </View>
                        <View style={styles.rightColumn}>
                            <AppText style={{textAlignVertical: 'center'}}>
                                USD {contextData.pmt} {contextData.frequency.label}
ly                            </AppText>
                        </View>    
                    </View>
                    <View style={[styles.row, {backgroundColor: '#CFD9E8'}]}>
                        <View style={styles.leftColumn}>
                            <AppText style={{fontWeight: 'bold', textAlignVertical: 'center',}}>
                            Required Payment
                            </AppText>
                        </View>
                        <View style={styles.rightColumn}>
                            <AppText style={{textAlignVertical: 'center'}}>
                            USD {contextData.pmt} {contextData.frequency.label}ly
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
                    onPress={handleAdjust}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{},
    container:{},
    header:{
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'orange',
        width: '100%',
        height: 30,
        marginBottom: 20,
    },
    heading:{
        fontWeight: 'bold',
        fontSize: 22,
    },
    table:{
        width: '95%',
        // height: 120,
        borderWidth: 2,
        borderColor: '#053E94',
        // backgroundColor: 'red',
        marginBottom: 20,
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
    row:{
        width: '100%',
        // height: '33.3%',
        flexDirection: 'row',
        borderTopWidth: 2,
        borderColor: '#053E94',
        // backgroundColor: 'pink',
    },
    leftColumn:{
        width: '55%',
        // height: '100%',
        paddingLeft: 10,
        // backgroundColor: 'orange',
    },
    rightColumn:{
        width: '45%',
        // height: '100%',
        // backgroundColor: 'green',
    },
    detail:{
        padding: 5,
    },
});

export default InvestmentPlanSummaryScreenComponent;