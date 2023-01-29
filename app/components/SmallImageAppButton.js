import React from 'react';

import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import AppText from './AppText';

function SmallImageAppButton({onPress, title, image}) {
  return (
    <TouchableOpacity
        onPress={onPress} 
        style={styles.container}
    >
        <View style={styles.imageContainer}>
            <Image
                source={image}
                style={styles.image}
            />
        </View>
        <View style={styles.textContainer}>
            <Text numberOfLines={1} >
                {title}
            </Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    width: 120,
    height: 150,
    marginBottom: 10,
    // backgroundColor: 'red',
  },
  imageContainer:{
    width: 120,
    height: 120,
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    // backgroundColor: 'pink',
  },
  image:{
    width: 90,
    height: 90,
  },
  textContainer:{
    width: 120,
    height: 30,
    // backgroundColor:'orange',
    alignItems:'center'
  },
});

export default SmallImageAppButton;