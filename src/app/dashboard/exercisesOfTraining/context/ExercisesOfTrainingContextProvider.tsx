"use client"

import { useReducer, useEffect } from "react";
import { ExercisesOfTrainingContext } from "./ExercisesOfTrainingContext";
import { exercisesoftrainingReducer } from "./exercisesOfTrainingReducer";
import { ExercisesOfTrainingStateModel } from "@/app/models/ExercisesOfTrainingStateModel";


type ExercisesOfTrainingContextProviderProps = {
    children: React.ReactNode,
    exercisesoftraining: ExercisesOfTrainingStateModel;
  };
  




  export function ExercisesOfTrainingContextProvider({ children, exercisesoftraining }: ExercisesOfTrainingContextProviderProps) {

    const [state, dispatch] = useReducer(exercisesoftrainingReducer, exercisesoftraining);
    console.log("ExercisesOfTraining context provider",state);
    return(
        <ExercisesOfTrainingContext.Provider value={{state, dispatch}}>
                  {children}
        </ExercisesOfTrainingContext.Provider>
    )
  }