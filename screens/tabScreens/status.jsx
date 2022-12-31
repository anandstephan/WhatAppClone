import { View, Text,StyleSheet,FlatList, Dimensions,Pressable } from 'react-native'
import React,{useState} from 'react'
import StatusHelperComponent from '../../components/statushelperComponent'
import { FloatingAction } from "react-native-floating-action";
import { Ionicons,Entypo } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';

const CameraScreen = ({type,toggleCameraType}) =>{
  return <View style={styles.cameraContainer}>    
  <Camera style={styles.camera} type={type}>
  <View style={styles.buttonContainer}>
    <Pressable style={styles.button} onPress={toggleCameraType}>
      <Text style={styles.text}>Flip Camera</Text>
    </Pressable>
  </View>
</Camera>
</View>
}

const Status = ({navigation}) => {
  const [type, setType] = useState(CameraType.back);
  const [shownCamera,setShownCamera] = useState(false)
  const [permission, requestPermission] = Camera.useCameraPermissions();


  function toggleCameraType() {
    console.log(type)
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));


  }

if(permission!=='granted'){
  requestPermission()
 
}

  return (
    <View>
   
      {shownCamera 
      ?
      <CameraScreen type={type} toggleCameraType={toggleCameraType}/> 
      : 
      <>
      <FlatList
      data={[1]}
      keyExtractor={item =>item}
      renderItem={()=>{
        return <>
        <StatusHelperComponent title="" data={['']} showTitle={false} time="Tap to add status update" navigation={navigation}/>    
        <StatusHelperComponent title="Recent updates" data={['23','d']} time="18 minutes ago" navigation={navigation}/>
        <StatusHelperComponent title="Viewed updates" data={[1,2,3,4,5,6,8,7,22,24,56,47]} time="18 minutes ago" navigation={navigation}/>
        </>
      }}
      />
          <View style={{marginBottom:'-17%'}}>
          <FloatingAction
          color='green'
          floatingIcon={<Ionicons name="md-camera" size={24} color="white" />}
          actions={[]}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
          animated={true}
          onPressMain={setShownCamera}
        />
        </View>
        <View>
          <FloatingAction
          color='green'
          floatingIcon={<Entypo name="edit" size={24} color="white" />}
          actions={[]}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
          animated={true}
          onPressMain={()=>navigation.navigate('textStatus')}

        />
        </View>
 
        </> }
  

</View>
      

      
  )
}

export default Status


const styles = StyleSheet.create({
  cameraContainer:{
    height:'100%',
    width:'100%'
  },
  camera:{
    height:'100%',
    width:'100%'
  },
  buttonContainer:{
    borderWidth:3
  },
  button:{
    backgroundColor:"red"
  },
  text:{
    fontSize:20
  }
})