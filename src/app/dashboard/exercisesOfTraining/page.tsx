import { ExercisesOfTrainingStateModel } from '../../models/ExercisesOfTrainingStateModel';
import { getCookieServer } from '../../../lib/cookieServer';
import { api } from '../../../services/api';
import { ExercisesOfTrainingContextProvider } from './context/ExercisesOfTrainingContextProvider';
import { PageExercisesOfTraining } from './components/PageExercisesOfTraining';
import { ExerciseModel } from '@/app/models/ExerciseModel';


export default async function ExercisesOfTraining(training_id:string){
     const token = await getCookieServer();
 
     const response = await api.get("/exercisesoftraining",{
         headers:{
               Authorization: `Bearer ${token}`
             },
             params:{
               id_training: training_id
             }
      })

     const exercisesoftrainingsoftrainingResponse: ExercisesOfTrainingStateModel ={
       exercisesoftraining: response.data,
       token:token,
       modalIsOpen:false,
       exercisesoftrainingModal:null,
       exercises: [],
     }

   
    return(
      <ExercisesOfTrainingContextProvider exercisesoftraining={exercisesoftrainingsoftrainingResponse}>
          <PageExercisesOfTraining/>
       </ExercisesOfTrainingContextProvider>

    )
}