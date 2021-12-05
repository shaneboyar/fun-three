import { Text, Button, Icon } from "@ui-kitten/components";
import * as React from "react";
import { View, StyleSheet, ImageProps } from "react-native";
import { Activity } from "../../../../../plan";
import ProgressBar from "./ProgessBar";

interface TopBarProps {
  currentActivity: Activity;
}

const FinishIcon = (props: Partial<ImageProps>) => (
  <Icon {...props} name="checkmark-circle-outline" />
);

const TopBar = ({ currentActivity }: TopBarProps) => {
  const adjustedStep = currentActivity.step - 1;
  return (
    <>
      <ProgressBar
        progress={(adjustedStep / currentActivity.totalSteps) * 100}
      />
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text category="h1">{currentActivity.totalSteps - adjustedStep}</Text>
          <Text category="s2">{"exercises \n left"}</Text>
        </View>
        <Button
          style={styles.finishButton}
          size="giant"
          status="basic"
          accessoryRight={<FinishIcon />}
        >
          Complete
        </Button>
      </View>
    </>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    height: "12%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  countContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  finishButton: {
    alignSelf: "center",
    borderRadius: 16,
    paddingHorizontal: 32,
  },
});
