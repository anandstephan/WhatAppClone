import React from 'react';
import {View,Text,StyleSheet,SafeAreaView} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Chat from './tabScreens/chat';
import Status from './tabScreens/status';
import Calls from './tabScreens/calls';
import { EvilIcons,Entypo } from '@expo/vector-icons';
import Community from './tabScreens/community';

const Tab = createMaterialTopTabNavigator();

const  MainScreen = ()=> {
  return (
    <SafeAreaView style={styles.tabContainer}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
      <Text style={styles.logo}>WhatsApp</Text>
      </View>
      <View style={styles.rightHeader}>
      <EvilIcons name="camera" size={30} color="black" />
      <Entypo name="magnifying-glass" size={25} color="black" />
      <Entypo name="dots-three-vertical" size={20} color="black" />
      </View>
      </View>

    <NavigationContainer>
    <Tab.Navigator>
      {/* <Tab.Screen name="commun" component={Community}/> */}
      <Tab.Screen name="Chats" component={Chat} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name='Calls' component={Calls}/>
    </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}

export default MainScreen

const styles = StyleSheet.create({
  tabContainer:{
    flex:1,
    borderColor:"black"
  },
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:10,
    marginVertical:15
  },
  leftHeader:{
    flex:3
  },
  rightHeader:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  logo:{
    fontSize:18
  }

})