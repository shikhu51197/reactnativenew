import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Vibration,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
const RegistrationScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateAccount = async () => {
    if (!firstName || !age || !email || !password || !confirmPassword) {
      Alert.alert("All fields are required.");
      return;
    }

    if (isNaN(age) || age <= 0) {
      Alert.alert("Age must be a valid number.");
      return;
    }

    if (password.length < 8) {
      Alert.alert("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password and Confirm Password do not match.");
      return;
    }

    const userData = {
      firstName,
      age: parseInt(age),
      email,
      password,
    };

    try {
      await AsyncStorage.setItem("userData", JSON.stringify(userData));
      
      Alert.alert("Account created successfully!");
      navigation.navigate("LoginScreen");

    } catch (error) {
      console.error("Error storing data:", error);
    }
    Vibration.vibrate(10);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./assets/Vector.png")} style={styles.logo} />
        <Image source={require("./assets/Go!.png")} style={styles.logo2} />
      </View>

      <View style={styles.spacing} />

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
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#808080"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#808080"
        value={firstName}
        autoCapitalize="none"
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor="#808080"
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={handleCreateAccount}
        >
          <Text>Create Account</Text>
        </TouchableOpacity>
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
    marginBottom: 50,
  },
  spacing: {
    height: 20,
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
    // gap: 16,
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
  logo1: {
    width: 119.46,
    height: 17.889,
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
    marginTop: 150,
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

export default RegistrationScreen;
