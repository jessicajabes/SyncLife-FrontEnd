import { ExercisesOfTrainingModel } from './ExercisesOfTrainingModel';


export type ExercisesOfTrainingStateModel = {
    exercisesoftraining: ExercisesOfTrainingModel[];
    token: string | null;
    modalIsOpen:boolean;
    exercisesoftrainingModal:ExercisesOfTrainingModel|null;
}