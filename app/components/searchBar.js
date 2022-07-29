import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import GlobalStyles from '../GlobalStyles';

import { View, Text, StyleSheet } from "react-native";

const SearchBarComponent = () => {
    const [ searchQuery, setSearchQuery ] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return(
        <View style={styles.search}>
            <View >
                    <Text style={GlobalStyles.carTextName}>Rent a Ride</Text>
                    <Text style={styles.carPriceText}>With pride...</Text>
                    
            </View>
       <Searchbar
        
          iconColor='gray'
          placeholder="Search a car"
          onChangeText={onChangeSearch}
          value={searchQuery}
          clearIcon={({ size, color }) => (
            <MaterialIcons name="cancel" size={24} color='black' />
          )}
        />
        </View>
        

    );
};

const styles = StyleSheet.create({
    search: {
        marginHorizontal: 8,
    },
    carPriceText: {
        fontSize: 15,
        fontWeight: '100',
        padding: 4,
        marginTop: 1
       },
})

export default SearchBarComponent;