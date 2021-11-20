import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/RootStack/RootStack";
import * as FirebaseCore from "expo-firebase-core";
import { initializeApp } from "firebase/app";
import AppLoading from "expo-app-loading";

export default function App() {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    const defaultAppOptions = FirebaseCore.DEFAULT_APP_OPTIONS;
    if (defaultAppOptions !== undefined) {
      initializeApp(
        FirebaseCore.DEFAULT_APP_OPTIONS as FirebaseCore.FirebaseOptions
      );
      setIsReady(true);
    }
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
