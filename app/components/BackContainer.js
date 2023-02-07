import React from 'react';

import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

function BackContainer(props) {

    const handleBack=()=>{
        console.log('handleBack',props);
        props.navigation.goBack();
    }

  return (
    <View style={styles.container}>
        
        <View style={styles.leftContainer}>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="transparent"
                onPress={handleBack}
            >
                <Image
                    source={require('../assets/back.png')}
                    style={styles.back}
                />

            </TouchableHighlight>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: 40,
    backgroundColor: '#122D53',
  },
  leftContainer:{
    width: 50,
    height: 40,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center'
  },
  back:{
    height: 30,
    width: 30,
  },
});

export default BackContainer;