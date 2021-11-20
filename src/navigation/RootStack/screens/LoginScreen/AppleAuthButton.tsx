import * as React from "react";
import * as AppleAuthentication from "expo-apple-authentication";
import { ActivityIndicator } from "react-native";
import * as SecureStore from "expo-secure-store";
import { AppleAuthenticationCredential } from "expo-apple-authentication";
import { getDatabase, ref, set, get } from "firebase/database";
import dayjs from "dayjs";
import { getAuth, signInWithCredential, OAuthProvider } from "firebase/auth";

interface AppleAuthButtonProps {}

export const AppleAuthButton = ({}: AppleAuthButtonProps) => {
  const [isReady, setIsReady] = React.useState<boolean | undefined>();

  React.useEffect(() => {
    const checkAvailability = async () => {
      const isAvailable = await AppleAuthentication.isAvailableAsync();
      setIsReady(isAvailable);
    };
    checkAvailability();
  }, []);

  const handleSuccess = async ({
    user,
    identityToken,
    email,
    fullName,
  }: AppleAuthenticationCredential) => {
    if (identityToken) {
      const userData = {
        email,
        firstName: fullName?.givenName,
        lastName: fullName?.familyName,
      };
      const auth = getAuth();
      await SecureStore.setItemAsync("user", user);
      const provider = new OAuthProvider("apple.com");
      const credential = provider.credential({ idToken: identityToken });
      const userCreds = await signInWithCredential(auth, credential);
      const { uid } = userCreds.user;
      const db = getDatabase();
      if (fullName) {
        await set(ref(db, "users/" + uid), userData);
      }
    }
  };

  if (isReady === undefined) {
    return <ActivityIndicator />;
  }

  if (isReady) {
    return (
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={{ width: 200, height: 44 }}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            await handleSuccess(credential);
          } catch (e: any) {
            if (e.code === "ERR_CANCELED") {
              // handle that the user canceled the sign-in flow
              console.log(
                "🚀 ~ file: AppleAuthButton.tsx ~ line 20 ~ onPress={ ~ e",
                e
              );
            } else {
              // handle other errors
              console.log(
                "🚀 ~ file: AppleAuthButton.tsx ~ line 20 ~ onPress={ ~ e",
                e
              );
            }
          }
        }}
      />
    );
  }

  return null;
};
