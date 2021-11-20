import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/RootStack/RootStack";
import * as FirebaseCore from "expo-firebase-core";
import { initializeApp } from "firebase/app";
import AppLoading from "expo-app-loading";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

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
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}
