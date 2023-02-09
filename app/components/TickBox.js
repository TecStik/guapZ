import React, { useState } from 'react';

import { View, StyleSheet } from 'react-native';

import Checkbox from 'expo-checkbox';
import AppText from './AppText';


function TickBox({ title }) {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#084877' : undefined}
                />
                <AppText>
                    {title}
                </AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 5,
        alignItems: 'center',
        flexDirection: 'row',
    },
    checkbox:{
        marginRight: 15,
    }
});

export default TickBox;