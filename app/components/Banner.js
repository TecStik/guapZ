import {React,useContext,useState} from 'react';

import { View, StyleSheet, Image, Dimensions } from 'react-native';

const {height, width}= Dimensions.get('window');
function Banner(props) {
  const banners= useState(['../assets/genZbanner.png','../assets/targetAmount.png','../assets/timeHorizon.png']);
  console.log(Dimensions.get('window'));
  return (
    <View style={styles.container}>
        <Image
            source={require('../assets/genZbanner.png')}
            style={styles.banner}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    // width: '100%',
    width: width*0.96,
    // height: '30%',
    height: height*0.29,
    overflow: 'hidden',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  banner:{
    width: '100%',
    height: '90%',
  },
});

export default Banner;