import { View, Text,SafeAreaView,StyleSheet,StatusBar } from 'react-native'
import React from 'react'
import CustomHeader from '../components/customHeader'

const Message = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <CustomHeader messageHeader={true} headerShown={true} navigation={navigation}/>
        <View style={styles.messageContainer}>
          <View>
    <Text>Hi</Text>
          </View>
          <View>
      <Text>Message Chat</Text>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default Message

const styles = StyleSheet.create({
  container:{
    marginTop:StatusBar.currentHeight
  },
  messageContainer:{
    borderWidth:2,
    justifyContent:'space-evenly',
  }
})