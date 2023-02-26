import React, {useState,useContext} from 'react';
import StoreContext from '../screens/GlobalState';

import { View, StyleSheet, ScrollView, Text } from 'react-native';
import AppText from '../components/AppText';
import SliderComponent from '../components/SliderComponent';
import AppButton from '../components/AppButton';

function AdjustmentPlanScreenComponent({setShowPlan},Otherprops) {
    const contextData = useContext(StoreContext);

    const [sliderData1, setSliderData1] = useState(contextData.pmt);
    const [sliderData2, setSliderData2] = useState(contextData.tHorizon);
    const [sliderData3, setSliderData3] = useState(contextData.futValue);

    const handleSlider1=(sliderData)=>{
        setSliderData1(sliderData);
        contextData.setPmt(parseInt(sliderData));
    }
    const handleSlider2=(sliderData)=>{
        setSliderData2(sliderData);
        contextData.setTHorizon(parseInt(sliderData));
        console.log("changed TH",sliderData,contextData.tHorizon)
    }
    const handleSlider3=(sliderData)=>{
        setSliderData3(sliderData);
        contextData.setFutValue(parseInt(sliderData));
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

                <View style={{width: '90%', alignSelf: 'center'}}>
                    <View style={{width: '100%', flexDirection: 'row' ,}}>
                        <View style={{width: '33%', justifyContent:'center', alignItems: 'center', paddingVertical: 10 ,backgroundColor: 'lightblue', borderWidth: 1,}}>
                            <Text>Target</Text>
                        </View>
                        <View style={{width: '33%', justifyContent:'center', alignItems: 'center', paddingVertical: 10 ,backgroundColor: 'lightblue',  borderWidth: 1,}}>
                            <Text>Expected</Text>
                        </View>
                        <View style={{width: '34%', justifyContent:'center', alignItems: 'center', paddingVertical: 10 ,backgroundColor: 'lightblue',  borderWidth: 1,}}>
                            <Text>Deficit/Surplus</Text>
                        </View>

                    </View>

                    <View style={{width: '100%', flexDirection: 'row',}}>
                        <View style={{width: '33%', justifyContent:'center', alignItems: 'center', paddingVertical: 10 ,backgroundColor: 'white', borderWidth: 1,}}>
                            <Text>{contextData.futValue}</Text>
                        </View>
                        <View style={{width: '33%', justifyContent:'center', alignItems: 'center', paddingVertical: 10 ,backgroundColor: 'white',  borderWidth: 1,}}>
                            <Text>{contextData.expVal}</Text>
                        </View>
                        <View style={{width: '34%', justifyContent:'center', alignItems: 'center', paddingVertical: 10 ,backgroundColor: 'white',  borderWidth: 1,}}>
                            <Text>{(contextData.expVal-contextData.futValue).toFixed(2)}</Text>
                        </View>

                    </View>


                </View>


                <AppText>Change {contextData.frequency.label}ly Contribution</AppText>
                <SliderComponent
                    high={100000}
                    low={0}
                    title={'Ruppes'}
                    onPress={handleSlider1}
                    value={sliderData1}
                />

                <AppText>Change Time Horizon</AppText>
                <SliderComponent
                    high={240}
                    low={0}
                    title={'Month'}
                    onPress={handleSlider2}
                    value={sliderData2}
                />

                <AppText>Change Target Amount</AppText>
                <SliderComponent
                    high={1000000}
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