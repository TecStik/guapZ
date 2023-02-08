import React from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import AppText from '../components/AppText';


import GuazBackContainer from '../components/GuazBackContainer';
import PickerList from '../components/PickerList';
import Screen from '../components/Screen';

function NormalRedemptionScreen(props) {
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
                    />
                    <PickerList
                        placeHolder={'Select Fund'}
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
});

export default NormalRedemptionScreen;