import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Message from '../screens/Message';
import ProfileDetail from '../screens/ProfileDetail';
import Stories from '../screens/Stories';
const Stack = createStackNavigator();


const StackNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={{
        headerShown:false
    }}>
    <Stack.Screen name="Home" component={Home}   />
    <Stack.Screen name="message" component={Message}/>

    <Stack.Screen name='profileDetail' component={ProfileDetail}/>

    <Stack.Screen name="stories" component={Stories}/>
  </Stack.Navigator>
  )
}

export default StackNavigator