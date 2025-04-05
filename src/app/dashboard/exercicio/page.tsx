import styles from './styles.module.scss';
import {FormExercice} from './components/FormExercice'
import {GetExercises} from './components/GetExercicios';
import { getCookieServer } from '@/lib/cookieServer';
import { api } from '@/services/api';
import { ExerciseContextProvider } from './context/ExerciseContextProvider';




export default async function Exercice(){
    const token = await getCookieServer();

    const response = await api.get("/exercise",{
        headers:{
              Authorization: `Bearer ${token}`
            }
     })
    //console.log(response.data);
    return(
      <ExerciseContextProvider exercise={response.data}>
          <main className={styles.container}>
            <FormExercice/>
            <GetExercises exercises={response.data}/>
          </main>
      </ExerciseContextProvider>
    )
}