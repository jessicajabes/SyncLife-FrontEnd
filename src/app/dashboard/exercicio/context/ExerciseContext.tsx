"use client"
import { createContext } from "react";
import { ExerciseStateModel } from "@/app/models/ExerciseStateModel";
import { initialExerciseState } from "./initialExerciseState";
import { ExerciseActionModel } from "./ExerciseActions";

type ExerciseContextProps = {
    state: ExerciseStateModel;
    dispatch: React.Dispatch<ExerciseActionModel>;
  };
  
  const initialContextValue = {
    state: initialExerciseState,
    dispatch: () => {},
  };
  
  export const ExerciseContext = createContext<ExerciseContextProps>(initialContextValue);