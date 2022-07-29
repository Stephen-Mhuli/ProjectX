import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'

import GlobalStyles from '../../GlobalStyles';
import { AntDesign } from '@expo/vector-icons';


const CarListPopularCard = ({ navigation }) => {


  const [Cars, setCars] = useState([

    { src: require('./Cars/maseraticar.png'), id: 1, model: 'BMW X6', price: "50$/Day", year: 2017, speed: '120km/hr'},
    { src: require('./Cars/toyotacar1.png'), id: 2, model: 'TOYOTA', price: "30$/Day",year: 2019, speed: '100km/hr'},
    { src: require('./Cars/maseraticar.png'), id: 3, model: 'BMW X6', price: "50$/Day", year: 2017, speed: '120km/hr'},
    { src: require('./Cars/toyotacar1.png'), id: 4, model: 'TOYOTA', price: "30$/Day",year: 2019, speed: '100km/hr'},
    { src: require('./Cars/maseraticar.png'), id: 5, model: 'BMW X6', price: "50$/Day", year: 2017, speed: '120km/hr'},
    { src: require('./Cars/toyotacar1.png'), id: 6, model: 'TOYOTA', price: "30$/Day",year: 2019, speed: '100km/hr'},
   
  ]);

  // const buttonHandler = () =>{
  //   navigation.navigate('Details', { item: item });
  // };

  // const pressHandler = () =>{
  //   navigation.navigate('Details', { item: item });
  // }

  return (
    <View style={styles.container}>
        <View>
          <Text style={GlobalStyles.commonHeading}>Hot Deals</Text>
        </View>
        <FlatList 
          //numColumns={2}
          
          horizontal={true}
          data={Cars}
          keyExtractor={(item) => item.id}
          renderItem={({item})=> (
            <View style={styles.cardContainer}>
                  <View >
                    <Text style={styles.carTextName}>{item.model}</Text>
                    <Text style={styles.carPriceText}>{item.price}</Text>
                  </View>
              <View style={styles.cardDetails}>
                  
             <TouchableWithoutFeedback onPress={() => navigation.navigate('Details', { item: item })} >
                 <Image
                   source={item.src} 
                   style={styles.carImage}
                   //fadeDuration='100'
                 />
              </TouchableWithoutFeedback>
              <TouchableOpacity onPress={() =>navigation.navigate('Details', { item: item })} style={styles.button}>
                    <Text style={styles.buttonText}>Rent</Text>
                    <View style={styles.buttonIcon}> 
                           <AntDesign name="right" size={16} color="white" />   
                    </View>
              </TouchableOpacity>


              </View>
            </View>
            
          )}
        
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: 10,
    backgroundColor: '#c0c0c0'
  },
  cardContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    borderColor: '#c0c0c0',
    marginHorizontal: 8,
    //borderWidth: 1,
    marginVertical: 8,
    padding: 0,
    borderRadius: 12,
    backgroundColor: '#fff',
    height: 135,
    //width: 170
  },
  carImage:{
    width: 110,
    height: 80,
    resizeMode:'contain',
  },
  cardDetails: {
   marginLeft: 0,
   marginTop: 0
  },
  button: {
    //borderWidth:1,
    marginLeft: 10,
    borderColor: '#00ffff',
    borderBottomRightRadius:14,
    borderTopLeftRadius: 14,
    padding: 4,
    marginTop: 20,
    flexDirection: 'row',
    width: 100,
    alignItems: 'center',
    backgroundColor: '#00008b'
  },
  
   buttonText: {
    fontSize: 17,
    color: '#fff',
    marginLeft: 10

   },
   buttonIcon: {
    marginLeft: 20
   },
   carTextName:{
    fontSize: 16,
    fontWeight: '300',
    marginLeft: 6
   },
   carPriceText: {
    fontSize: 12,
    fontWeight: '300',
    padding: 4,
    marginTop: 80,
    marginLeft: 4
   },
  
});


export default CarListPopularCard;
