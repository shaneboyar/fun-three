import * as React from "react";

import { SafeAreaView, StyleSheet } from "react-native";
import TopBar from "./TopBar/TopBar";
import ActivityOverview from "./ActivityOverview";
import CompleteButton from "./CompleteButton";
import { Layout } from "@ui-kitten/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationProp, RouteProp, useRoute } from "@react-navigation/core";
import { RootStackParamList } from "../../types";
import { getActivityDetails, getNextActivity } from "../../../../plan";

// type ActivityScreenNavigation = NavigationProp<RootStackParamList, "Activity">;
type ActivityScreenRoute = RouteProp<RootStackParamList, "Activity">;

interface ActivityScreenProps {}

const ActivityScreen = (props: ActivityScreenProps) => {
  const { currentActivity, setCurrentActivity } =
    useRoute<ActivityScreenRoute>().params;
  const { top } = useSafeAreaInsets();

  const handleActivityComplete = React.useCallback(() => {
    const nextActivity = getNextActivity(currentActivity);
    setCurrentActivity(nextActivity);
  }, []);

  const currentActivityDetails = React.useMemo(() => {
    return getActivityDetails(currentActivity);
  }, []);

  return (
    <Layout style={[styles.container, { marginTop: top }]}>
      <TopBar currentActivity={currentActivity} />
      <ActivityOverview />
      <CompleteButton />
    </Layout>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
