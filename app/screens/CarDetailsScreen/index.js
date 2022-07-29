import { View, Text, StyleSheet} from 'react-native';
import {StatusBar} from 'react-native';
import React from 'react'

const CarDetailsScreen = (props) => {

  //const { id, model, src, year, price, speed } = props.route.params;
  //console.log(props.route.params);

  const car = props.route.params;
  console.log(props.route.params)
  return (
    <View style={styles.container}>
      
      {/* { car.item.map((item, index) => {
        return (
          <View key={index}> */}
            <Text>Model: {JSON.stringify(car.item.model)}</Text>
            <Text>src: {JSON.stringify(car.item.src)}</Text>
            <Text>Price: {JSON.stringify(car.item.price)}</Text>
            <Text>Speed: {JSON.stringify(car.item.speed)}</Text>
            <Text>year: {JSON.stringify(car.item.year)}</Text>
          {/* </View>
        )
      }
      )} */}
      </View>
  )
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1c1c1',
    paddingTop: StatusBar.currentHeight
    // marginTop: 11
    
  },
});

export default CarDetailsScreen;