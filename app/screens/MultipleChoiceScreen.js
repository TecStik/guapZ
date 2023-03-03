import React, {useState,useContext} from 'react';
import StoreContext from './GlobalState'
import { View, StyleSheet, FlatList } from 'react-native';
import BackContainer from '../components/BackContainer';
import Banner from '../components/Banner';
import SmallImageAppButton from '../components/SmallImageAppButton';
import Screen from '../components/Screen';
import OptionScreenComponent from '../components/OptionScreenComponent';
import MultipleChoiceScreenComponent from '../components/MultipleChoiceScreenComponent';
import MultipleOptionScreenComponent from '../components/MultipleOptionScreenComponent';

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



function MultipleChoiceScreen(props) {
  const contextData = useContext(StoreContext);
   console.log("propsin Mutiple coice",contextData);

  const handlePress=async(item)=>{
    console.log(item)
    contextData.setIcon(item);
    props.navigation.navigate("TVM");
  }

  return (
    <Screen>
        <BackContainer navigation={props.navigation} title={" None"}/>
        <Banner/>
        {/* <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.column}
            renderItem={({item}) =>
                <SmallImageAppButton 
                  title={item.title}
                  image={item.image} 
                  onPress={()=>handlePress(item)}
                /> 
            } 
        /> */}
        {(contextData.option==0)?<OptionScreenComponent/>:<></>}
        {(contextData.option==1)?<MultipleOptionScreenComponent handlePress={handlePress}/>:<></>}
        {(contextData.option==2)?<MultipleChoiceScreenComponent handlePress={handlePress}/>:<></>}
        {/* <MultipleChoiceScreenComponent handlePress={handlePress}/> */}
        
    </Screen>
  );
}

const styles = StyleSheet.create({
  container:{},
  column:{
    justifyContent: 'space-evenly',
  },
});

export default MultipleChoiceScreen;