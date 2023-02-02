import React, { useState } from 'react';

import { View, StyleSheet, Text, Dimensions } from 'react-native';


// import Slider from '@react-native-community/slider';

import { Slider } from 'react-native-awesome-slider';

const {height, width}= Dimensions.get('window');


function SliderComponent(props) {
    const [data, setSliderData] = useState(10);
    const progress = useSharedValue(30);
    const min = useSharedValue(0);
    const max = useSharedValue(100);
    return (
        <View style={styles.container}>

            {/* <View style={styles.display}>
                <Text>{data}</Text>
            </View> */}


            <View style={styles.slider}>
                {/* <Slider
                    maximumValue={100}
                    minimumValue={0}
                    minimumTrackTintColor="#D50000"
                    maximumTrackTintColor="#01579B"
                    step={1}
                    value={data}
                    onValueChange={
                    (sliderValue) => setSliderData(sliderValue)
                    }
                    // thumbTintColor="#1B5E20"
                    thumbImage={"../assetsfavicon.png/"}
                    style={{width: '90%',  }}
                /> */}

                <Slider
                    // style={styles.container}
                    progress={progress}
                    minimumValue={min}
                    maximumValue={max}
                />
            </View>
            {/* <Text style={{ fontSize: 28 }}>
        Value of slider is : {data}
      </Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: width,
        height: 80,
        alignItems:'center',
        backgroundColor: 'red',
        flexDirection: 'row',
    },
    display:{
        width: '25%',
        height: '70%',
        backgroundColor: 'pink',
    },
    slider:{
        width: '75%',
        height: '70%',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'yellow',
    },
});

export default SliderComponent;