import { ExerciceStateModel } from '../../models/ExerciseStateModel';
import { getCookieServer } from '../../../lib/cookieServer';
import { api } from '../../../services/api';
import { ExerciseContextProvider } from './context/ExerciseContextProvider';
import { PageExercise } from './components/PageExercise/PageExercise';



export default async function Exercice(){
     const token = await getCookieServer();
 
     const response = await api.get("/exercise",{
         headers:{
               Authorization: `Bearer ${token}`
             }
      })

     const exercisesResponse: ExerciceStateModel ={
       exercises: response.data,
       token:token,
       modalIsOpen:false,
       exerciseModal:null,
     }
     console.log("PAGE",exercisesResponse)
   
    return(
      <ExerciseContextProvider exercise={exercisesResponse}>
          <PageExercise/>
       </ExerciseContextProvider>

    )
}