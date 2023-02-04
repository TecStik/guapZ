import React, { useState } from 'react';

import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';


import Slider from '@react-native-community/slider';

// import { Slider } from 'react-native-awesome-slider';

const {height, width}= Dimensions.get('window');


function SliderComponent({ high, low, thumbSize = 2,onPress, value }) {
    const [data, setSliderData] = useState(10);
    return (
        <View style={styles.container}>

            <View style={styles.display}>
                <Text style={styles.valueText}>
                    {value}
                </Text>
            </View>


            <View style={styles.slider}>
                <Slider
                    maximumValue={high}
                    minimumValue={low}
                    minimumTrackTintColor="#122D53"
                    maximumTrackTintColor="blue"
                    step={1}
                    value={value}
                    onValueChange={onPress}
                    // thumbTintColor="#1B5E20"
                    thumbImage={require('../assets/GuapZ.png')}
                    style={{width: '50%',  transform: [{ scaleX: thumbSize }, { scaleY: thumbSize }]}} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: width,
        height: 80,
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    display:{
        width: '20%',
        height: '70%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 15,
    },
    valueText:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    slider:{
        width: '70%',
        height: '90%',
        justifyContent: 'center',
        alignItems:'center',
        // backgroundColor: 'yellow',
        
    },
});

export default SliderComponent;