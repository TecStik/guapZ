import React from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import BackContainer from '../components/BackContainer';
import Banner from '../components/Banner';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import SliderComponent from '../components/SliderComponent';

function AdjustmentPlanScreen(props) {
    return (
        <Screen>
            <BackContainer/>
            <Banner/>
            <ScrollView>
                <View style={styles.header}>
                    <AppText style={styles.heading}>
                        Adjust your Plan
                    </AppText>
                </View>


                <SliderComponent/>
            </ScrollView>

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
});

export default AdjustmentPlanScreen;