import BottomSheet from "@gorhom/bottom-sheet";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface CompletionSheetProps {}

const CompletionSheet = (props: CompletionSheetProps) => {
  // ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  // variables
  const snapPoints = React.useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <View style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
      </View>
    </BottomSheet>
  );
};

export default CompletionSheet;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
