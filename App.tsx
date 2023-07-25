import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./Home";
import LoginPage from "./LoginPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="">
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={LoginPage} options={{headerShadowVisible: false , headerTintColor: 'black'} } />
    </Stack.Navigator>
  </NavigationContainer>
}


export default App;