import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return <View style={[styles.container, { width: `${progress}%` }]} />;
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(255, 165, 0, 0.05)",
    borderTopColor: "rgb(255, 165, 0)",
    borderTopWidth: 4,
  },
});
