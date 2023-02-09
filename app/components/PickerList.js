import React, { useState } from 'react';

import { View, StyleSheet, } from 'react-native';

import { SelectList } from 'react-native-dropdown-select-list'


function PickerList({ placeHolder }) {


    const [selected, setSelected] = useState("");

    const data = [
        {key:'1', value:'Mobiles',},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers'},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]

    return (
        <View style={styles.container}>
            <SelectList 
                setSelected={(val) => setSelected(val)} 
                data={data} 
                save="value"
                boxStyles={{borderRadius: 0, borderWidth: 2, borderColor: '#CFD9E8', backgroundColor: 'white', margin: 5}}
                
                dropdownStyles={{borderRadius: 0, borderWidth: 1,}}
                // maxHeight='100'
                placeholder={placeHolder}  
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
    },
});

export default PickerList;