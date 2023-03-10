import {React,useState} from 'react';

import { View, StyleSheet, Dimensions, Image, Text, Button } from 'react-native';
import AppButton from './AppButton';
import AppText from './AppText';

const {height, width}= Dimensions.get('window');

function FundComponent({handleFundSelect,fund},Otherprops) {
    console.log("Fund inFundComponent",typeof(fund.icon));
const[icon,setIcon]=useState(fund.icon);
    return (
        <View style={styles.container}>
            
            <View style={styles.upperContainer}>
                <View style={styles.logoContainer}>
                    <Image
                        source={icon}
                        style={{width: '100%', height: '60%',}}
                    />
                </View>
                <View style={styles.headerContainer}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                        {fund.name}
                    </Text>
                    <Text>
                        {fund.description}
                    </Text>
                </View>
            </View>

            <View style={styles.lowerContainer}>
                <View style={styles.leftContainer}>
                    <Text>
                        Return P.A
                    </Text>
                    <Text style={{fontWeight: 'bold'}}>
                       {fund.return}
                    </Text>

                </View>
                <View style={styles.middleContainer}>
                    <Text>
                        Rating
                    </Text>
                    <Text style={{fontWeight: 'bold'}}>
                        {fund.rating}
                    </Text>
                </View>
                <View style={styles.rightContainer}>
                    <Button
                        title='Invest Now'
                        onPress={()=>handleFundSelect(fund)}
                        color='#084877'
                    />
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: width*0.95,
        height: width*0.45,
        alignSelf: 'center',
        borderRadius: width*0.1,
        borderWidth: 2,
        marginVertical: 5,
    },
    upperContainer:{
        width: '90%',
        height: '60%',
        alignSelf: 'center',
        flexDirection: 'row',
        // backgroundColor: 'red',
        borderBottomWidth: 2,
    },
    logoContainer:{
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow',
    },
    headerContainer:{
        width: '70%',
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 20,
        // backgroundColor: 'pink',
    },
    lowerContainer:{
        width: '90%',
        height: '40%',
        alignSelf: 'center',
        flexDirection: 'row',
        // backgroundColor: 'red',
    },
    leftContainer:{
        width: '25%',
        height: '80%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRightWidth: 2,
        // backgroundColor: 'orange'
    },
    middleContainer:{
        width: '25%',
        height: '80%',
        justifyContent: 'center',
        paddingLeft: 10,
        alignSelf: 'center',
        // borderRightWidth: 2,
        // backgroundColor: 'pink'
    },
    rightContainer:{
        width: '50%',
        height: '80%',
        alignSelf: 'center',
        justifyContent: 'center',
        // borderRightWidth: 2,
        // backgroundColor: 'yellow'
    },
});

export default FundComponent;