import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function BigAppButton({title, onPress, color = 'primary', width='80%'}) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color], width: width}] } onPress={onPress} >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary,
        borderRadius: 15,
        justfyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
        marginTop: 10,
        alignSelf:'center',
    },
    text:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
})

export default BigAppButton;