import React from 'react';

import { View, StyleSheet, FlatList } from 'react-native';
import FundComponent from './FundComponent';

function FundComponentListScreen({fund, setShowPlan}) {
    return (
        <FlatList 
            data={fund}
            // keyExtractor={listing => listing.id.toString()}
            renderItem={({item}) =>
                <FundComponent
                    setShowPlan={setShowPlan}
                    fund={item}
                />
            } 
        />
    );
}

const styles = StyleSheet.create({
    container:{},
});

export default FundComponentListScreen;