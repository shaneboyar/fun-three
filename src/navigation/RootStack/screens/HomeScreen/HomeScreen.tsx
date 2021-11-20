import { getAuth } from "@firebase/auth";
import { getDatabase, set } from "@firebase/database";
import { ref } from "firebase/database";
import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const handleLogout = async () => {
    await getAuth().signOut();
  };

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button onPress={handleLogout} title="log out" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
