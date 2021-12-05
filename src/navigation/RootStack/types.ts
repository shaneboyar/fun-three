import { Activity } from "../../plan";

export type RootStackParamList = {
  Home: undefined;
  Activity: {
    currentActivity: Activity;
    setCurrentActivity: React.Dispatch<React.SetStateAction<Activity>>;
  };
};
