"use client"
import { createContext } from "react";
import { TrainingStateModel } from "@/app/models/TrainingStateModel";
import { initialTrainingState } from "./initialTrainingState";
import { TrainingActionModel } from "./TrainingActions";

type TrainingContextProps = {
    state: TrainingStateModel;
    dispatch: React.Dispatch<TrainingActionModel>;
  };
  
  const initialContextValue = {
    state: initialTrainingState,
    dispatch: () => {},
  };
  
  export const TrainingContext = createContext<TrainingContextProps>(initialContextValue);