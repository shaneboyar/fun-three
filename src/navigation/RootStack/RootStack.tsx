import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { getAuth } from "firebase/auth";
import ActivityScreen from "./screens/ActivityScreen/ActivityScreen";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const [idToken, setIdToken] = React.useState<string>();

  React.useEffect(() => {
    getAuth().onIdTokenChanged(async (user) => {
      const token = await user?.getIdToken();
      setIdToken(token);
    });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      {idToken ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Activity" component={ActivityScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
