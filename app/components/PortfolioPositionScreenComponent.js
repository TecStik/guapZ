import React from 'react';

import { View, StyleSheet, Dimensions } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

const {height, width} = Dimensions.get('window');

function PortfolioPositionScreenComponent(props) {

    const handleViewStatement=()=>{
        console.log('handleViewStatement')
    }

    return (
        <View style={styles.container}>
            <AppText style={styles.header}>
                Portfolio Position
            </AppText>

            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <View style={styles.leftColumn}>
                        <AppText style={{textAlignVertical: 'center', paddingLeft: 10, fontWeight: 'bold'}}>
                            Portfolio
                        </AppText>
                    </View>
                    <View style={styles.rightColumn}>
                        <AppText style={{textAlignVertical: 'center', paddingLeft: 10, fontWeight: 'bold' }}>
                            Value
                        </AppText>    
                    </View>
                </View>

                <View style={[styles.tableRow, {backgroundColor: '#CFD9E8'}]}>
                    <View style={styles.leftColumn}>
                        <AppText style={{textAlignVertical: 'center', paddingLeft: 10}}>
                            Hajj Plan
                        </AppText>
                    </View>
                    <View style={styles.rightColumn}>
                        <AppText style={{textAlignVertical: 'center', paddingLeft: 10}}>
                            XXX USD
                        </AppText>
                    </View>
                </View>

                <View style={styles.tableRow}>
                    <View style={styles.leftColumn}>
                        <AppText style={{textAlignVertical: 'center', paddingLeft: 10}}>
                            Aggressive Growth
                        </AppText>
                    </View>
                    <View style={styles.rightColumn}>
                        <AppText style={{textAlignVertical: 'center', paddingLeft: 10}}>
                            XXX USD
                        </AppText>
                    </View>
                </View>

            </View>
            
            <View style={{height: '20%', width: '100%'}}>
                <AppButton
                    title={'View Statement'}
                    onPress={handleViewStatement}
                />

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: width,
        height: height*0.5,
        alignItems: 'center',
    },
    header: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '900',
        padding: 10,
    },
    table:{
        width: '100%',
        height: '45%',
        // backgroundColor: 'blue',
        borderWidth: 3,
        marginBottom: 20,
    },
    tableRow:{
        width: '100%',
        height: '33.3%',
        borderBottomWidth: 2,
        // backgroundColor: 'pink',
        flexDirection: 'row',
    },
    leftColumn:{
        width: '50%',
        height: '100%',
        // backgroundColor: 'yellow',

    },
    rightColumn:{
        width: '50%',
        height: '100%',
        // backgroundColor: 'orange',
    },
});

export default PortfolioPositionScreenComponent;