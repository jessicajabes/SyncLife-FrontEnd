"use client"
import { useContext } from "react";
import { TrainingContext } from "./TrainingContext";

export function useTrainingContext(){
    return useContext(TrainingContext);
}