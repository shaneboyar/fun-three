import { getAuth } from "@firebase/auth";
import * as React from "react";
import { Button, Layout, Text } from "@ui-kitten/components";

import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/core";
import { RootStackParamList } from "../../types";

type HomeScreenNavigation = NavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const { navigate } = useNavigation<HomeScreenNavigation>();

  const handleLogout = async () => {
    await getAuth().signOut();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>
        <Text category="h1">Let's Go</Text>
        <Text category="s1">Circuit 1 | Week 1 | Day 1</Text>
        <Button
          status="success"
          appearance="outline"
          style={styles.startButton}
          onPress={() => navigate("Activity")}
        >
          Start!
        </Button>
        <Button
          style={{ bottom: 0, position: "absolute" }}
          onPress={handleLogout}
          appearance="ghost"
        >
          log out
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 16,
  },
  startButton: {
    height: 320,
    width: 320,
    borderRadius: 160,
    marginTop: 160,
  },
});
