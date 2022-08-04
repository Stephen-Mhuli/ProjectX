import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MessagesCard = () => {
  return (
    <View style={styles.cardContainer}>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

    },
    cardContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        borderColor: '#c0c0c0',
        marginHorizontal: 8,
        borderWidth: 1,
        marginVertical: 8,
        padding: 2,
        borderRadius: 14,
        backgroundColor: '#fff'
      },
})

export default MessagesCard