import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { AppleAuthButton } from "./AppleAuthButton";

interface LoginScreenProps {}

const LoginScreen = ({}: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <AppleAuthButton />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},
});
