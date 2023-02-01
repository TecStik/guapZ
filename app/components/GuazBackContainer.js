import React from 'react';

import { View, StyleSheet, TouchableHighlight, Image } from 'react-native';

function GuazBackContainer(props) {

    const handleBack=()=>{
        console.log('handleBack')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.leftContainer}>
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="transparent"
                        onPress={handleBack}
                    >
                        <Image
                            source={require('../assets/back.png')}
                            style={styles.back}
                        />
                    </TouchableHighlight>
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 150,
        backgroundColor: '#084877',
    },
    
    topContainer:{
        width: '100%',
        height: 40,
        backgroundColor: '#122D53',
    },
    leftContainer:{
        width: 50,
        height: 40,
        // backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    },
    back:{
        height: 30,
        width: 30,
    },
});

export default GuazBackContainer;