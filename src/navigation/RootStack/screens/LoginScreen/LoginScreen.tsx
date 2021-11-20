import { Layout, Text } from "@ui-kitten/components";
import * as React from "react";
import { StyleSheet } from "react-native";
import { AppleAuthButton } from "./AppleAuthButton";

interface LoginScreenProps {}

const LoginScreen = ({}: LoginScreenProps) => {
  return (
    <Layout style={styles.container}>
      <Text>LoginScreen</Text>
      <AppleAuthButton />
    </Layout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},
});
