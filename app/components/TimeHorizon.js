import React, { useState,useContext } from 'react';

import { View, StyleSheet, Image, Button, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import AppButton from './AppButton';
import AppText from './AppText';
import AppTextInput from './AppTextInput';
import StoreContext from '../screens/GlobalState';
import Icon from './Icon';
import colors from '../config/colors';


function TimeHorizon(props) {
  const contextData = useContext(StoreContext);
    const [value, setValue] =useState('');
    const [icon, setIcon] =useState(contextData.icon);

    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());

    const showDatePicker=()=> {
      setDatePicker(true);
    };

    const onDateSelected = (event, value)=> {
      setDate(value);
      let currentDate= new Date();
      let futDate=(new Date("2027-05-01"));
      let difference= calcDate(futDate,currentDate);

      console.log("CurrentDate",currentDate,"Future Date",value);
      console.log("Difference",difference);
      setDatePicker(false);
    };
 async   function calcDate(date1,date2) {
      var diff = Math.floor(date1.getTime() - date2.getTime());
      var day = 1000 * 60 * 60 * 24;
    
  
      var days = Math.floor(diff/day);
     
      // var months = Math.floor(days/31);
      // var years = Math.floor(months/12);
  
      // var message = date2.toDateString();
      // message += " was "
      // message += days + " days " 
      // message += months + " months "
      // message += years + " years ago \n";

let year=Math.floor(days/365);
     let _month= Math.floor(days% 365);
    let month= (_month/30);
      let _day= days % month;
      console.log("Difference in YY-MM-DD",date1.toString(),date2.toString());
      console.log("Difference in YY-MM-DD",year,_month,_day);
      return message
      }

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
        {!datePicker && (
          <View style={{ margin: 0 }}>
            <Icon
              iconName='calendar-month-outline'
              iconColor={colors.primary}
              // title='Show Date Picker'
              onPress={showDatePicker}
            />
            {/* <Button title="Show Date Picker" color="green" onPress={showDatePicker} /> */}
          </View>
        )}

<Text >You will be able to achieve your goal in 5 years 2 months 6 days</Text>
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

{/* {!datePicker && (
          <View style={{ margin: 10 }}>
            <Button title="Show Date Picker" color="green" onPress={showDatePicker} />
          </View>
        )} */}



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