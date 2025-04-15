import { ExerciseModel } from "./ExerciseModel"


export type ExerciseStateModel = {
    exercises: ExerciseModel[];
    token: string | null;
    modalIsOpen:boolean;
    exerciseModal:ExerciseModel|null;
}