import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Vibration,
  Alert,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from "@react-navigation/native";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Both email and password are required.");
      return;
    }
    try {
      const userDataString = await AsyncStorage.getItem("userData");
      if (userDataString) {
        const userData = JSON.parse(userDataString);

        if (email === userData.email && password === userData.password) {
        
          Alert.alert("Login successful!");
          navigation.navigate("HomePage");
          
        } else {
          Alert.alert("Invalid email or password.");
        }
      } else {
        Alert.alert("No user data found. Please register first.");
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
    Vibration.vibrate(10);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./assets/Vector.png")} style={styles.logo} />
        <Image source={require("./assets/Go!.png")} style={styles.logo2} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email ID"
        placeholderTextColor="#808080"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#808080"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <View style={styles.spacing} />
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={handleLogin}>
          Login
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#000",
    height: 820,
    flexDirection: "column",
    justifyContent: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 80,
  },
  spacing: {
    height: 200,
  },
  input: {
    borderRadius: 8,
    width: 272,
    height: 56,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    color: "#808080",
    backgroundColor: "#000",
    paddingHorizontal: 10,
    // fontFamily: "Untitled Sans",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    paddingLeft: 8,
    gap: 16,
  },
  logo: {
    width: 119.46,
    height: 17.889,
    marginRight: 10,
  },
  logo2: {
    height: 18.396,
    width: 37.848,
    marginRight: 10,
  },

  buttonContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.70)",
    backgroundColor: "#FFF",
    display: "flex",
    width: 272,
    height: 50,
    minWidth: 132,
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    textAlign: "center",
    gap: 4,
    flexShrink: 0,
    marginTop: 100,
  },
  buttonText: {
    flex: 1,
    flexGrow: 1,
    color: "#000000",
    textAlign: "center",
    // fontFamily: "Athletics",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: 20,
  },
});

export default LoginScreen;
