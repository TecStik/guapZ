import React, { useState,useContext } from "react";

import { View, StyleSheet, ScrollView } from 'react-native';
import StoreContext from './GlobalState'
import BackContainer from '../components/BackContainer';
import Banner from '../components/Banner';
import GuazBackContainer from '../components/GuazBackContainer';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import { funds }  from './supportingfiles/dummydata';
import FundComponent from '../components/FundComponent';
import InvestmentPlanSummaryScreenComponent from '../components/InvestmentPlanSummaryScreenComponent';
import AdjustmentPlanScreenComponent from '../components/AdjustmentPlanScreenComponent';

function InvestmentPlanSummaryScreen(props) {
    const contextData = useContext(StoreContext);
    const[showPlan,setShowPlan]=useState(false);
    console.log("Funds in Investment Plan Summary",contextData.riskScore);

    const handleAdjust=()=>{
        console.log("pressed Adjust")
    }

    return (
        <Screen>
            {/* <BackContainer/> */}
            {/* <Banner/> */}
            <GuazBackContainer/>

{(!showPlan)?
 <FundComponent setShowPlan={setShowPlan} fund={funds[0]}/>:
 <InvestmentPlanSummaryScreenComponent/>
}
          

           
        </Screen>
    );
}

const styles = StyleSheet.create({
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
        width: '100%',
        height: 120,
        borderWidth: 2,
        borderColor: '#053E94',
        // backgroundColor: 'red',
        marginBottom: 20,
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
    },
});

export default InvestmentPlanSummaryScreen;