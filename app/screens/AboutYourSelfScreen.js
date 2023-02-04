import React from 'react';

import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import GuazBackContainer from '../components/GuazBackContainer';
import Screen from '../components/Screen';

function AboutYourSelfScreen(props) {
    return (
        <Screen>
            <GuazBackContainer/>
            <AppText>
                Tell us more about yourSelf
            </AppText>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{},
});

export default AboutYourSelfScreen;