import { Text, View, Button, StyleSheet } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';


const CarView = ({ car }) => {
    return (
        <View style={{ flex: 1, margin: 8 }}>
              <MaterialIcons name="menu" size={28} color="black" style={styles.menuButton} />
              <Text>{car}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})


export default CarView;