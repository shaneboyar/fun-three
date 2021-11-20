import * as React from "react";

import { SafeAreaView, StyleSheet } from "react-native";
import TopBar from "./TopBar/TopBar";
import ActivityOverview from "./ActivityOverview";
import CompleteButton from "./CompleteButton";
import { Layout } from "@ui-kitten/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ActivityScreenProps {}

const ActivityScreen = (props: ActivityScreenProps) => {
  const { top } = useSafeAreaInsets();
  return (
    <Layout style={[styles.container, { marginTop: top }]}>
      <TopBar />
      <ActivityOverview />
      <CompleteButton />
    </Layout>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
