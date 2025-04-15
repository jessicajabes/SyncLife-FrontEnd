"use client"
import { createContext } from "react";
import { ExercisesOfTrainingStateModel } from "@/app/models/ExercisesOfTrainingStateModel";
import { initialExercisesOfTraining } from "./initialExercisesOfTrainingState";
import { ExercisesOfTrainingActionModel } from "./ExercisesOfTrainingActions";

type ExercisesOfTrainingContextProps = {
    state: ExercisesOfTrainingStateModel;
    dispatch: React.Dispatch<ExercisesOfTrainingActionModel>;
  };
  
  const initialContextValue = {
    state: initialExercisesOfTraining,
    dispatch: () => {},
  };
  
  export const ExercisesOfTrainingContext = createContext<ExercisesOfTrainingContextProps>(initialContextValue);