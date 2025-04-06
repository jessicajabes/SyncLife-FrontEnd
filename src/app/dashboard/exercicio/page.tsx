import styles from './styles.module.scss';
import {FormExercice} from './components/FormExercice'
import {GetExercises} from './components/GetExercicios';
import { getCookieServer } from '@/lib/cookieServer';
import { api } from '@/services/api';
import { ExerciseContextProvider } from './context/ExerciseContextProvider';
import { ExerciceStateModel } from '@/app/models/ExerciseStateModel';





export default async function Exercice(){

    const token = await getCookieServer();

    const response = await api.get("/exercise",{
        headers:{
              Authorization: `Bearer ${token}`
            }
     })
    const exercisesResponse: ExerciceStateModel ={
      exercises:response.data,
      token:token,
    }

    return(
      <ExerciseContextProvider exercise={exercisesResponse}>
          <main className={styles.container}>
            <FormExercice/>
            <GetExercises/>
          </main>
      </ExerciseContextProvider>
    )
}