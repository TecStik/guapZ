import {React,useContext,useState} from 'react';

import { View, StyleSheet, Image, Dimensions } from 'react-native';
import StoreContext from '../screens/GlobalState';

const {height, width}= Dimensions.get('window');
function MultiBanner(props) {
    const contextData = useContext(StoreContext);
  const banners= useState(['../assets/genZbanner.png','../assets/targetAmount.png','../assets/timeHorizon.png']);
  console.log(Dimensions.get('window'));
  return (
    <View style={styles.container}>
        
             {(contextData.step=="0")?
            <Image source={require('../assets/timeHorizon.png')}style={styles.banner}/>:<></>
          }
           {(contextData.step=="1")?
             <Image source={require('../assets/targetAmount.png')}style={styles.banner}/>:<></>
          }
          {(contextData.step=="2")?
             <Image source={require('../assets/frequency.png')}style={styles.banner}/>:<></>
          }
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

export default MultiBanner;