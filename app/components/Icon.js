import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 


function Icon({iconName='account',borderColor, borderWidth, borderRadius=2, iconSize=100, backgroundColor=colors.darkShade, iconColor=colors.secondary, title, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={{
            width: iconSize,
            height: iconSize,
            borderRadius: iconSize/borderRadius,
            borderWidth: borderWidth,
            borderColor: borderColor,
            backgroundColor: backgroundColor,
            justifyContent: 'center',
            alignItems: 'center', 
            alignSelf: 'center',

        }}>
            <MaterialCommunityIcons name={iconName} color={iconColor} size={iconSize*0.75} />
        </View>
        <View style={{
            // justifyContent: 'center',
            // alignItems: 'center',
            alignSelf: 'center',
        }}>
            {title && <AppText>{title}</AppText>}
        </View>
        </TouchableOpacity>
    );
}

export default Icon;