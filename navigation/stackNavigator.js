import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Message from '../screens/Message';
import Stories from '../screens/Stories';
import TextStatus from '../screens/TextStatus';


const Stack = createStackNavigator();


const StackNavigator = () => {
  return (
    <Stack.Navigator  screenOptions={{
        headerShown:false
    }}>
    <Stack.Screen name="Home" component={Home}   />
    <Stack.Screen name="message" component={Message}/>
    <Stack.Screen name="stories" component={Stories}/>
    <Stack.Screen name="textStatus" component={TextStatus}/>
  </Stack.Navigator>
  )
}

export default StackNavigator