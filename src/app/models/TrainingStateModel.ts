import { TrainingModel } from "./TrainingModel"


export type TrainingStateModel = {
    training: TrainingModel[];
    token: string | null;
    modalIsOpen:boolean;
    trainingModal:TrainingModel|null;
}