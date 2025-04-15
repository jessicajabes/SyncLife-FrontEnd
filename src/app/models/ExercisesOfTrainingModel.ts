import { ExerciseModel } from '@/app/models/ExerciseModel';
import { TrainingModel } from "./TrainingModel";


export type ExercisesOfTrainingModel ={
    id_exerciseoftraining: string;
    block: number;
    repeat: string;
    description: string;
    created_at : number;
    update_at: number;
    exercise_id: string;
    training_id: string;
    training:TrainingModel;
    exercise:ExerciseModel;
}