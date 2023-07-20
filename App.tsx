import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./Home";
import LoginPage from "./LoginPage";
import SignUp from "./LoginPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="">
      <Stack.Screen name=" " component={Home} />
      <Stack.Screen name="로그인" component={LoginPage} />
    </Stack.Navigator>
  </NavigationContainer>
}


export default App;