import { getAuth } from "@firebase/auth";
import * as React from "react";
import { Button, Layout, Text } from "@ui-kitten/components";

import { ActivityIndicator, SafeAreaView, StyleSheet } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/core";
import { RootStackParamList } from "../../types";
import { Activity, initialActivity } from "../../../../plan";

type HomeScreenNavigation = NavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const { navigate } = useNavigation<HomeScreenNavigation>();
  const [currentActivity, setCurrentActivity] =
    React.useState<Activity>(initialActivity);
  const [loading, setLoading] = React.useState<boolean>(true);

  const handleLogout = async () => {
    await getAuth().signOut();
  };

  const getCurrentActivity = React.useCallback(() => {
    try {
      setLoading(true);
      // check db for user state
      // if none, start at beginning
      setCurrentActivity(initialActivity);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    getCurrentActivity();
  }, []);

  if (loading) {
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>
        <ActivityIndicator size="large" />
      </Layout>
    </SafeAreaView>;
  }

  const { circuit, week, day, step } = currentActivity;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>
        <Text category="h1">Let's Go</Text>
        <Text category="s1">{`Circuit ${circuit} | Week ${week} | Day ${day}`}</Text>
        <Button
          status="success"
          appearance="outline"
          style={styles.startButton}
          onPress={() =>
            navigate("Activity", {
              currentActivity,
              setCurrentActivity,
            })
          }
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
