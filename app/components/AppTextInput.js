import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import defaultStyles from '../config/styles';

function AppTextInput({ icon, width = '100%', ...otherProps }) {
     return (
         <View style={[styles.container, {width}]}>
             {icon && <MaterialCommunityIcons name={icon} size={25} color={defaultStyles.colors.lightShade} style={styles.icon} />}
             <TextInput placeholderTextColor={defaultStyles.colors.lightShade} style={defaultStyles.text} {...otherProps} /> 
         </View>
     );
 }

 const styles = StyleSheet.create({
     container:{
        backgroundColor: defaultStyles.colors.lightGrey,
        borderRadius: 35,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
        overflow: 'hidden',
     },
     icon:{
        marginRight:10,
     },
 })
 
 export default AppTextInput;