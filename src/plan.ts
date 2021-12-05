type Schedule = Record<"week1" | "week2" | "week3" | "week4", Week>;
type Week = Record<"day1" | "day2" | "day3", Day>;
interface Day {
  generalWarmUp: string;
  dynamicWarmUp: string;
  warmupExercise?: string;
  exercises: Exercise[];
  assists: Assist[];
  stretches: string;
}
interface Assist {
  name: string;
  note: string;
}
interface Exercise {
  name: ExcerciseName;
  note: string;
  sets?: ExerciseSet[];
  eval?: boolean;
}
type ExcerciseName =
  | "Bench Press"
  | "Back Squat"
  | "Strict Overhead Press"
  | "Deadlift";
interface ExerciseSet {
  reps?: number;
  percent5rm?: number;
  maxReps?: boolean;
}
export type Activity = {
  circuit: number;
  week: 1 | 2 | 3 | 4;
  day: 1 | 2 | 3;
  step: 1 | 2 | 3;
  totalSteps: number;
};
export const initialActivity: Activity = {
  circuit: 1,
  week: 1,
  day: 1,
  step: 1,
  totalSteps: 2,
};

export const getNextActivity = (currentActivity: Activity): Activity => {
  console.log(
    "🚀 ~ file: plan.ts ~ line 45 ~ getNextActivity ~ currentActivity",
    currentActivity
  );
  return {
    circuit: 1,
    week: 1,
    day: 2,
    step: 1,
    totalSteps: 1,
  };
};

export const getActivityDetails = ({ week, day, circuit, step }: Activity) => {
  return schedule[`week${week}`][`day${day}`].exercises[step - 1];
};

const evalDay1: Day = {
  generalWarmUp: "Sled Drags or equivalent",
  dynamicWarmUp: "bands and rolling",
  exercises: [
    {
      name: "Bench Press",
      note: "Up to a 4-5RM",
      eval: true,
    },
    {
      name: "Back Squat",
      note: "Up to a 4-5RM",
      eval: true,
    },
  ],
  assists: [
    {
      name: "DB OHP/Face Pulls/Split SQ",
      note: "up to 2-3 sets of 5-8 reps/set",
    },
    {
      name: "Opt. Dips/Rev Fly/3-way crunch",
      note: "up to 2-3 sets of HR",
    },
  ],
  stretches:
    "full straddle sides, quad, pretzel, opt. “newspaper”, doorway, subscap, etc",
};

const schedule: Schedule = {
  week1: {
    day1: evalDay1,
    day2: evalDay1,
    day3: evalDay1,
  },
  week2: {
    day1: evalDay1,
    day2: evalDay1,
    day3: evalDay1,
  },
  week3: {
    day1: evalDay1,
    day2: evalDay1,
    day3: evalDay1,
  },
  week4: {
    day1: evalDay1,
    day2: evalDay1,
    day3: evalDay1,
  },
};
