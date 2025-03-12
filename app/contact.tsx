import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import chicken from '@/assets/images/chicken.jpg'

const contact = () => {
  return (
    <View>
        <View>
            <Image source={chicken} style={styles.image} />
        </View>
        <View >
            <Text>Vollaille D'or</Text>
            <Text>Total Tamdja</Text>
        </View>
        <View>
            <Text>Phone</Text>
            <Text>+237 678140682</Text>
        </View>
        <View>
            <Text>Hours</Text>
            <Text>Open 6am to 4pm daily</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:'100%', 
        resizeMode:'center'
    }
})

export default contact