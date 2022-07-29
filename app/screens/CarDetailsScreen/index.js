import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'

const CarDetailsScreen = (props) => {

  //const { id, model, src, year, price, speed } = props.route.params;
  //console.log(props.route.params);

  const car = props.route.params;
  console.log(props.route.params)
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image source={car.item.src} style={styles.mainImage}/>
      </View>
      <View style={styles.detailsContainer}>
        <TouchableOpacity style={styles.imageOpacity}>
          <Image source={car.item.src} style={styles.smallImage}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageOpacity}>
          <Image source={car.item.src} style={styles.smallImage}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageOpacity}>
          <Image source={car.item.src} style={styles.smallImage}/>
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <Text style={{ margin: 10, fontWeight: 'bold', fontSize: 18 }}>Key Specs</Text>
        </View>
        <View style={{ padding: 10, marginTop: 2, marginBottom: 10, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ flex: 1, margin: 8 }}>
            <MaterialIcons name="menu" size={36} color="black" style={styles.menuButton} />
              <Text>{car.item.speed}</Text>
            </View>
            <View style={{ flex: 1, margin: 8 }}>
              <MaterialIcons name="menu" size={28} color="black" style={styles.menuButton} />
              <Text>{car.item.speed}</Text>
            </View>
            <View style={{ flex: 1, margin: 8 }}>
              <MaterialIcons name="menu" size={28} color="black" style={styles.menuButton} />
              <Text>{car.item.speed}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 , margin: 8}}>
              <MaterialIcons name="menu" size={28} color="black" style={styles.menuButton} />
              <Text>{car.item.speed}</Text>
            </View>
            <View style={{ flex: 1, margin: 8 }}>
              <MaterialIcons name="menu" size={28} color="black" style={styles.menuButton} />
              <Text>{car.item.speed}</Text>
            </View>
            <View style={{ flex: 1, margin: 8 }}>
              <MaterialIcons name="menu" size={28} color="black" style={styles.menuButton} />
              <Text>{car.item.price}</Text>
            </View>

          </View>
          <View>
            <Text>About</Text>
            <Text>
              nknsvVN.n.nv.m..xddjhjdjldjjksdlja;j;jlhnk
              jbkjnflznk,fkjnjwaslnaknsdzmasla,asnld;
              mbasczbasl, dc d dxmllll vs bladlkalcjzx,l
              kjv,bscdzxlkb.lf,xc
            </Text>
          </View>

        </View>
      </View>


      
            {/* <Text>Model: {car.item.model}</Text>
            <Text>src: {car.item.src}</Text>
            <Text>Price: {car.item.price}</Text>
           
            <Text>year: {car.item.year}</Text> */}
      <View style={{margin: 10, }}> 
          <Button title="Rent Now" />
        </View>
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
  mainImage: {
    height: 250,
    width: "70%",
    resizeMode: 'contain',
  },
  smallImage: {
    height: 60,
    width: '100%',
    resizeMode: 'contain'
  },
  detailsContainer: { 
    flexDirection: 'row',
   },
    imageOpacity: {
      flex: 1,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 12,
      margin: 8
    }

});

export default CarDetailsScreen;