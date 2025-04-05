import { useContext } from "react";
import { ExerciseContext } from "./ExerciseContext";

export function useExerciseContext(){
    return useContext(ExerciseContext);
}