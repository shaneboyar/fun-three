import { Button } from "@ui-kitten/components";
import * as React from "react";
import { StyleSheet } from "react-native";

interface CompleteButtonProps {}

const CompleteButton = (props: CompleteButtonProps) => {
  return (
    <Button style={styles.completeButton} size="giant" status="basic">
      Complete
    </Button>
  );
};

export default CompleteButton;

const styles = StyleSheet.create({
  completeButton: {
    position: "absolute",
    bottom: 64,
    alignSelf: "center",
    paddingHorizontal: 80,
    paddingVertical: 16,
    borderRadius: 16,
  },
});
