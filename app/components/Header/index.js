import { View, StyleSheet , TouchableOpacity} from 'react-native'
import React from 'react'

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
           <MaterialIcons name="menu" size={30} color="black" style={styles.menuButton} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
           <FontAwesome name="user-circle" size={28} color="black" style={styles.userIcon} />
        </TouchableOpacity>
       
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        //paddingTop: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 8,
    },
    menuButton: {
       padding: 2,
       margin: 2
    },
    userIcon: {
        padding: 2,
        marginRight: 4
    }

})

export default Header;