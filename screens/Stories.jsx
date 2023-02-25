import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Stories = () => {
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.container}>
      <Text>Stories</Text>
    </View>
    </>
  )
}

export default Stories

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})