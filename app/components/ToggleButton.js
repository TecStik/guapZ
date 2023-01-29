import React from 'react';

import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function ToggleButton({ onPress, title, color='transparent'}) {

  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.container, { backgroundColor: colors[color]}]}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container:{
        width: 130,
        paddingVertical: 10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
        borderColor: colors.primary,
        borderWidth: 2,
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
});

export default ToggleButton;