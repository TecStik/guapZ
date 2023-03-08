import React, { useState,useContext } from 'react';

import { View, StyleSheet, Image, Button, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import AppButton from './AppButton';
import AppText from './AppText';
import AppTextInput from './AppTextInput';
import StoreContext from '../screens/GlobalState';


function TimeHorizon(props) {
  const contextData = useContext(StoreContext);
    const [value, setValue] =useState('');
    const [icon, setIcon] =useState(contextData.icon);

    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    const [pickedDate, setPickedDate] = useState('Time Horizon')

    const showDatePicker=()=> {
      setDatePicker(true);
    };

    const onDateSelected = (event, value)=> {
      setDate(value);
      setPickedDate(value.toDateString());
      
      setDatePicker(false);
    };


    const handleProceed=()=>{
      contextData.setTHorizon(parseInt(value));
        console.log(value);
        const nextstep=parseInt(contextData.step)+1
        contextData.setStep(nextstep);
    }

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.rightContainer}>
                <Image
                    source={icon.image}
                    style={{width: 50, height: 50}}
                />
            </View>
        </View>
        <View style={{width: '100%', height: 50, alignItems: 'center'}}>
            <AppText>
                What is your target time Horizon?
            </AppText>
        </View>
        {/* <AppTextInput
            icon='cash-multiple'
            placeholder={'Time Horizon'}
            keyboardType='numeric'
            value={value}
            onChangeText={setValue}
        /> */}

        <View>
            <AppButton
              // title={date.toDateString()}
              title={pickedDate}
              onPress={showDatePicker}
            />
        </View>



        <AppButton
            title={'Proceed'}
            onPress={handleProceed}
        />


        {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
            // style={styleSheet.datePicker}
          />
        )}


          
        

      <Text >Date = {date.toDateString()}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // backgroundColor: 'red',
  },
  header:{
    width: '100%',
    height: 80,
    marginBottom: 30,
    // backgroundColor: 'pink',
  },
  rightContainer:{
    width: 80,
    height: 80,
    // backgroundColor: 'yellow',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TimeHorizon;