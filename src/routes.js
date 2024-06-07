import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./pages/Home";
import Passwords from "./pages/Passwords";

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return(
    <Tab.Navigator>
      <Tab.Screen 
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="home"/>
            }

            return <Ionicons size={size} color={color} name="home-outline"/>
          }
        }}
        />

      <Tab.Screen 
        name="passwords"
        component={Passwords}
        options={{
          // tabBarShowLabel: false, PARA CASO NÃO QUEIRA O NOMEZINHO
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="lock-closed"/>
            }
  
            return <Ionicons size={size} color={color} name="lock-closed-outline"/>
          }
        }}
      />
    </Tab.Navigator>
  );
}