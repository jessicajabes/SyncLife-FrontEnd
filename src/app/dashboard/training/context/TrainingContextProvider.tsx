"use client"

import { useReducer, useEffect } from "react";
import { TrainingContext } from "./TrainingContext";
import { trainingReducer } from "./trainingReducer";
import { TrainingStateModel } from "@/app/models/TrainingStateModel";


type TrainingContextProviderProps = {
    children: React.ReactNode,
    training: TrainingStateModel;
  };
  




  export function TrainingContextProvider({ children, training }: TrainingContextProviderProps) {

    const [state, dispatch] = useReducer(trainingReducer, training);
    console.log("training context provider",state);
    return(
        <TrainingContext.Provider value={{state, dispatch}}>
                  {children}
        </TrainingContext.Provider>
    )
  }