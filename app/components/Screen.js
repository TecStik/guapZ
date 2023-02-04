import React, { Children } from 'react';

import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import Constants from 'expo-constants'
import colors from '../config/colors';
// import LogoName from './LogoName';

function Screen({children,style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <StatusBar
                animated={true}
                backgroundColor= {colors.border} />
                {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        // padding: 5,
        // backgroundColor: colors.background,
    },
})

export default Screen;