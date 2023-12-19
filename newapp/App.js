import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./HomePage";
import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";
import BottomSheetModal from "./BottomSheetModal";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="BottomSheetModal" component={BottomSheetModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
