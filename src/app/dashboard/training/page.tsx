import { TrainingStateModel } from '../../models/TrainingStateModel';
import { getCookieServer } from '../../../lib/cookieServer';
import { api } from '../../../services/api';
import { TrainingContextProvider} from './context/TrainingContextProvider';
import { Pagetraining } from './components/PageTraining';



export default async function training(){
     const token = await getCookieServer();
 
     const response = await api.get("/training",{
         headers:{
               Authorization: `Bearer ${token}`
             }
      })

     const trainingsResponse: TrainingStateModel ={
       training: response.data,
       token:token,
       modalIsOpen:false,
       trainingModal:null,
     }
     console.log("PAGE",trainingsResponse)
   
    return(
      <TrainingContextProvider training={trainingsResponse}>
          <Pagetraining/>
       </TrainingContextProvider>

    )
}