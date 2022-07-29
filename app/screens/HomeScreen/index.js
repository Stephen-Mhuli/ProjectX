import { StyleSheet, View, } from 'react-native';
import  SearchBarComponent  from '../../components/searchBar';
import { StatusBar } from 'react-native';

import CarListHotDealCard from '../../components/carLists/CarListHotDealCard';
import CarListPopularCard from '../../components/carLists/CarListPopularCard';
import Header from '../../components/Header';
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Header navigation={navigation}/>
        <SearchBarComponent navigation={navigation}/>
        <CarListHotDealCard navigation={navigation}/>
        <CarListPopularCard navigation={navigation}/>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0',
    paddingTop: StatusBar.currentHeight
    // marginTop: 10
    
    
  },
});
