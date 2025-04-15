"use client"
import { useContext } from "react";
import { ExercisesOfTrainingContext } from "./ExercisesOfTrainingContext";

export function useExercisesOfTrainingContext(){
    return useContext(ExercisesOfTrainingContext);
}