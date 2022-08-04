import { Text, View, Button, StyleSheet, Dimensions } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const CarView = ({ car }) => {
    return (
        <View style={{ flex: 1, margin: 8 }}>
              <Ionicons name="speedometer" size={24} color="black" />
              <Text style={styles.specTextStyle}>{car}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    specTextStyle: {
        fontSize: deviceHeight < 380 ? 14 : 16,
        fontFamily: 'nunito_regular',
    }
})


export default CarView;