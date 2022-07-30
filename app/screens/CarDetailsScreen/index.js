import { View, Text, StyleSheet, Button, Image, TouchableOpacity, ScrollView , Dimensions} from 'react-native';
import { StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import CarView from '../../components/CarView';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const CarDetailsScreen = (props) => {

  //const { id, model, src, year, price, speed } = props.route.params;
  //console.log(props.route.params);

  const car = props.route.params;
  console.log(props.route.params);

  return (
    
      <View style={styles.container}>
        <ScrollView>
      <View style={{ alignItems: 'center' }}>
        <Image source={car.item.src} style={styles.mainImageStyle}/>
      </View>
      
      <View style={styles.detailsContainer}>
        {/* <CarView car={}/> */}
        <TouchableOpacity style={styles.imageOpacity}>
          <Image source={car.item.src} style={styles.smallImageStyle}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageOpacity}>
          <Image source={car.item.src} style={styles.smallImageStyle}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageOpacity}>
          <Image source={car.item.src} style={styles.smallImageStyle}/>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderTextStyle}>Key Specs</Text>
        </View>
        <View style={styles.specsContainerStyle}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
           <CarView car={car.item.model}/>
           <CarView car={car.item.model}/>
           <CarView car={car.item.model}/>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <CarView car={car.item.model}/>
            <CarView car={car.item.model}/>
            <CarView car={car.item.model}/>
          </View>
          <View>
          <View style={styles.subHeader}>
             <Text style={styles.subHeaderTextStyle}>About</Text>
          </View>
          <View style={styles.aboutStyle}>
          <Text style={styles.aboutTextStyle}>
              The BMW X6, though, set the trend and it's now in it's generation.
              These SUVs are a great fit for the modern lifestyle. The X6 is a 
              great choice for those who want to get out of the city and into the
              great outdoors.
            </Text>
          </View>
            
          </View>

        </View>
      </View>


      
            {/* <Text>Model: {car.item.model}</Text>
            <Text>src: {car.item.src}</Text>
            <Text>Price: {car.item.price}</Text>
           
            <Text>year: {car.item.year}</Text> */}
      
        </ScrollView>
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
    paddingTop: StatusBar.currentHeight,
  },
  mainImageStyle: {
    height: deviceHeight / 3.0,
    width: "80%",
    resizeMode: 'contain',
  },
  smallImageStyle: {
    height: deviceHeight / 12,
    width: '100%',
    resizeMode: 'contain'
  },
  detailsContainer: { 
    flexDirection: 'row',
    marginHorizontal: deviceWidth < 380 ? 4 : 6,
   },
    imageOpacity: {
      flex: 1,
      borderColor: 'black',
      borderWidth: deviceWidth < 380 ?  1 : 2,
      borderRadius: deviceWidth < 380 ?  8 : 12,
      margin: 8
    },
  subHeader: { 
    marginHorizontal: deviceWidth < 380 ?  10 : 16,
    marginTop: deviceWidth < 380 ?  10 : 16,
  },

  subHeaderTextStyle: {
    fontSize: deviceWidth < 380 ?  16 : 18,
    fontFamily: 'nunito_bold'
  },
  specsContainerStyle: { 
    padding: deviceWidth < 380 ?  8 : 16,
    alignItems: 'center' 
  },
  aboutStyle: {
    padding: deviceWidth < 380 ?  8 : 12,
  },
  aboutTextStyle: {
    fontSize: deviceWidth < 380 ?  14 : 16,
    fontFamily: 'nunito_regular',
  }

});

export default CarDetailsScreen;