"use client"

import styles from './styles.module.scss'
import {LucideDelete} from 'lucide-react'
import {X} from 'lucide-react'
import {Pen} from 'lucide-react'
import { useExerciseContext } from '../../context/useExerciseContext'
import { ExerciseActionTypes } from '../../context/ExerciseActions'
import { ExerciseModel } from '@/app/models/ExerciseModel'



export interface ExerciceProps{
    id_exercise: string;
    name_exercise: string;
    description_exercise: string;
}

interface Props{
    exercises: ExerciceProps[]
}

export function GetExercises(){

    const {state, dispatch} = useExerciseContext();
  
    return(
        
       state.exercises.map((item,index) =>(
        <button key={item.id_exercise} className={styles.section}>
              <div className={styles.tag}/>
              <span>{item.name_exercise}</span>
        </button>
       ))

       )
}

