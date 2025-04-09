import { ExerciseModel } from "./ExerciseModel"


export type ExerciceStateModel = {
    exercises: ExerciseModel[];
    token: string | null;
    modalIsOpen:boolean;
    exerciseModal:ExerciseModel|null;
}