import { View, Text,SafeAreaView,StyleSheet,StatusBar,Image, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { AntDesign,Entypo,MaterialIcons,FontAwesome } from '@expo/vector-icons';

const ProfileDetail = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container} >
            <View style={styles.shadowEffect}>
      <View style={styles.header}>
        <Pressable onPress={navigation.goBack}>
      <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
      <Image
         style={styles.img}
         source={{
           uri: 'https://images.unsplash.com/photo-1506795660198-e95c77602129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
         }}
       />
       <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.heading}>Anand</Text>
        <Text style={styles.mobileNo}>+91-8979669612</Text>
      </View>
      <View style={styles.secondaryContainer}>
        <View>
      <MaterialIcons name="call" size={24} color="black" />
      <Text>Audio</Text>
      </View>
      <View>
      <FontAwesome name="video-camera" size={24} color="black" />
      <Text>Video</Text>
      </View>
      <View>
      <FontAwesome name="rupee" size={24} color="black" />
      <Text>Pay</Text>
      </View>
      <View>
      <AntDesign name="search1" size={24} color="black" />
      <Text>Search</Text>
      </View>
      </View>
      </View>
      <View style={[styles.shadowEffect,styles.status]}>
         <Text style={{fontSize:17}}>Hey there! I am using WhatsApp</Text>
      </View>
      <View  style={[styles.shadowEffect,styles.status]}>
        <View style={styles.card}>
        <FontAwesome name="bell" size={24} color="black" />
        <Text style={{marginLeft:15,fontSize:17}}>Mute notifications</Text>
        </View>
        <View style={styles.card}>
        <FontAwesome name="bell" size={24} color="black" />
        <Text style={{marginLeft:15,fontSize:17}}>Custom notifications</Text>
        </View>
        <View style={styles.card}>
        <Entypo name="image" size={24} color="black" />
        <Text style={{marginLeft:15,fontSize:17}}>Media visibility</Text>
        </View>
      </View>
    </SafeAreaView >
  )
}

export default ProfileDetail

const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        flex:1,
      },
      header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
      },
      img:{
        width:120,
        height:120,
        borderRadius:100,
        },
        mainContainer:{
          marginTop:10,
          alignItems:"center",
          justifyContent:"center"
        },
        heading:{
          fontSize:30
        },
        mobileNo:{
          fontSize:16
        },
        secondaryContainer:{
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:'center',
          marginHorizontal:'20%',
          marginTop:20
        },
        shadowEffect:{
          padding:10,
          backgroundColor: 'white',
          elevation: 15,
          shadowColor: '#000',
          shadowOffset: {width: 1, height: 1},
          shadowOpacity: 0.1,
          shadowRadius: 20,
        },
        status:{
          justifyContent:"center",
          marginTop:10,
          padding:20
        },
        card:{
          flexDirection:'row',
          alignItems:"center",
          marginBottom:25

        }
})