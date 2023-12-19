import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity,Vibration, Text, StyleSheet } from "react-native";

const HomePage = ({ navigation }) => {
  const handleSignup = () => {
    console.log("Signup pressed");
    Vibration.vibrate(10);
    navigation.navigate("RegistrationScreen");
  };

  const handleLogin = () => {
    console.log("Login pressed");
    Vibration.vibrate(10);
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./assets/Vector.png")} style={styles.logo} />
        <Image source={require("./assets/Go!.png")} style={styles.logo2} />
      </View>
      <View style={styles.spacing} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={handleLogin}>
          <Text style={styles.buttonText1}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: 375,
    backgroundColor: "#000",
    height: 820,
    paddingBottom: 408.234,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // gap: 85.275,
  },
  spacing: {
    height: 5,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 100,
    paddingHorizontal: 12.778,
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 19.166,
  },
  logo: {
    width: 170.657,
    height: 25.555,
    marginTop: 100,
  },
  logo2: {
    width: 54.068,
    height: 26.28,
    marginTop: 100,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    minWidth: 132,
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    height: 44,
    borderRadius: 8,
    borderColor: "rgba(255, 255, 255, 0.70)",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 4,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
    borderColor: "gray",
  },
  buttonText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20,
    textAlign: "center",
    // fontFamily: "Athletics",
    fontStyle: "normal",
  },

  buttonText1: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20,
    textAlign: "center",
    // fontFamily: "Athletics",
    fontStyle: "normal",
  },

  button1: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: 4,
    backgroundColor: "#000",
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "white",
  },
});

export default HomePage;
