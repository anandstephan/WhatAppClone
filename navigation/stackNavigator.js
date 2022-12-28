import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Message from '../screens/Message';
import ProfileDetail from '../screens/ProfileDetail';
const Stack = createStackNavigator();


const StackNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={{
        headerShown:false
    }}>
    <Stack.Screen name="Home" component={Home}   />
    <Stack.Screen name="message" component={Message}/>
    <Stack.Screen name='profileDetail' component={ProfileDetail}/>
  </Stack.Navigator>
  )
}

export default StackNavigator