import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
        <Link href={'/menu'} style={styles.button}>
            <Text>Menu Page</Text>    
        </Link>
        <Link href={'/contact'} style={styles.button}>
            <Text>Contact</Text>    
        </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        margin: 10,
        verticalAlign:'auto',
        backgroundColor: '#333',
        color:'white',
        padding: 10
    }
})
export default index