import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface ActivityOverviewProps {}

const ActivityOverview = (props: ActivityOverviewProps) => {
  return (
    <View style={styles.container}>
      <Text>ActivityOverview</Text>
    </View>
  );
};

export default ActivityOverview;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "orchid",
  },
});
