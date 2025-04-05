"use server"
import { ExerciceStateModel } from "@/app/models/ExerciseStateModel";
import { api } from "@/services/api";
import { getCookieClient } from "@/lib/cookieClient";


export const initialExerciseState: ExerciceStateModel = { exercises: [],};


export async function GetExercice(){

    const token = await getCookieClient();

    const response = await api.get("/exercise",{
        headers:{
              Authorization: `Bearer ${token}`
            }
     })

     return response.data;

}






