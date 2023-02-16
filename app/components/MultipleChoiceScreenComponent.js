import React from 'react';

import {StyleSheet, FlatList } from 'react-native';
import SmallImageAppButton from '../components/SmallImageAppButton';



const listings = [
    {
        id: 1,
        title: 'Laptop/PC',
        image: require('../assets/laptop.png') 
    },
    {
        id: 2,
        title: 'Mobile Gadgets',
        image: require('../assets/mobile.png') 
    },
    {
      id: 3,
      title: 'Vacation',
      image: require('../assets/vacation.png') 
    },
    {
      id: 4,
      title: 'Apparel',
      image: require('../assets/apparel.png') 
    },
    {
      id: 5,
      title: 'Education',
      image: require('../assets/education.png') 
    },
    {
      id: 6,
      title: 'Custom',
      image: require('../assets/custom.png') 
    },
  ];

function MultipleChoiceScreenComponent(props) {
    
    const handlePress=(item)=>{
        console.log(item)
      }

    return (
        <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.column}
            renderItem={({item}) =>
                <SmallImageAppButton 
                    title={item.title}
                    onPress={()=>handlePress(item)}
                    image={item.image} 
                /> 
            } 
        />
    );
}

const styles = StyleSheet.create({
    container:{},
    column:{
        justifyContent: 'space-evenly',
    },
});

export default MultipleChoiceScreenComponent;