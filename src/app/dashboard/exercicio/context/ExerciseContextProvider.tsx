"use client"

import { useReducer, useEffect } from "react";
import { ExerciseContext } from "./ExerciseContext";
import { exerciseReducer } from "./exerciseReducer";
import { ExerciseStateModel } from "@/app/models/ExerciseStateModel";


type ExerciseContextProviderProps = {
    children: React.ReactNode,
    exercise: ExerciseStateModel;
  };
  




  export function ExerciseContextProvider({ children, exercise }: ExerciseContextProviderProps) {

    const [state, dispatch] = useReducer(exerciseReducer, exercise);
    console.log("Exercise context provider",state);
    return(
        <ExerciseContext.Provider value={{state, dispatch}}>
                  {children}
        </ExerciseContext.Provider>
    )
  }