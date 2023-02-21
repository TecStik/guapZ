import React, {useState,useContext} from 'react';
import StoreContext from '../screens/GlobalState';

import { View, StyleSheet, ScrollView } from 'react-native';
import AppText from '../components/AppText';
import SliderComponent from '../components/SliderComponent';
import AppButton from '../components/AppButton';

function AdjustmentPlanScreenComponent({setShowPlan},Otherprops) {
    const contextData = useContext(StoreContext);

    const [sliderData1, setSliderData1] = useState(contextData.futValue);
    const [sliderData2, setSliderData2] = useState();
    const [sliderData3, setSliderData3] = useState();

    const handleSlider1=(sliderData)=>{
        setSliderData1(sliderData)
    }
    const handleSlider2=(sliderData)=>{
        setSliderData2(sliderData)
    }
    const handleSlider3=(sliderData)=>{
        setSliderData3(sliderData)
    }

    const handlePress=()=>{
        console.log( sliderData1, " ", sliderData2, " ", sliderData3,setShowPlan,Otherprops);
        setShowPlan(true);
    }

    return (
        
            <ScrollView>
                <View style={styles.header}>
                    <AppText style={styles.heading}>
                        Adjust your Plan
                    </AppText>
                </View>


                <AppText>Change Periodic Contribution</AppText>
                <SliderComponent
                    high={100}
                    low={0}
                    title={'Ruppes'}
                    onPress={handleSlider1}
                    value={sliderData1}
                />

                <AppText>Change Time Horizon</AppText>
                <SliderComponent
                    high={20}
                    low={0}
                    title={'Month'}
                    onPress={handleSlider2}
                    value={sliderData2}
                />

                <AppText>Change Target Amount</AppText>
                <SliderComponent
                    high={20}
                    low={0}
                    title={'Rupees'}
                    onPress={handleSlider3}
                    value={sliderData3}
                />
            <View style={{marginVertical: 20,}}>
                <AppButton
                    title={'Confirm'}
                    onPress={handlePress}
                />
            </View>
            </ScrollView>
    
    );
}

const styles = StyleSheet.create({
    container:{},
    header:{
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'orange',
        width: '100%',
        height: 40,
        marginBottom: 20,
    },
    heading:{
        fontWeight: 'bold',
        fontSize: 22,
    },
});

export default AdjustmentPlanScreenComponent;