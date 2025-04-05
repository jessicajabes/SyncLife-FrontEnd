"use client"

import { useReducer } from "react";
import { ExerciseContext } from "./ExerciseContext";
import { exerciseReducer } from "./exerciseReducer";
import { GetExercice, initialExerciseState } from "./initialExerciseState";
import { ExerciceStateModel } from "@/app/models/ExerciseStateModel";

type ExerciseContextProviderProps = {
    children: React.ReactNode,
    exercise: ExerciceStateModel;
  };

  
  export function ExerciseContextProvider({ children, exercise }: ExerciseContextProviderProps) {
    const [state, dispatch] = useReducer(exerciseReducer, exercise);
    console.log(state);
    return(
        <ExerciseContext.Provider value={{state, dispatch}}>
                  {children}
        </ExerciseContext.Provider>
    )
  }