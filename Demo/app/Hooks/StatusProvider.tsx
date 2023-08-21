"use client";
import { createContext, useState} from "react"
import React from 'react'

export type statusType={
    validating:boolean,
   isComplete:boolean,
   isValidated:boolean,
   step:number

}
const initStatuses:statusType={
    validating:false,
   isComplete:false,
   isValidated:false,
   step:0
}
type contextType={
    status: statusType;
    setStatuses: React.Dispatch<React.SetStateAction<statusType>>;
}

const statusContext=()=>{
    const [status,setStatuses]=useState(initStatuses)
    return {status,setStatuses}
}


export const StatusContext=createContext<contextType>({} as contextType)



const StatusProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => (
    <StatusContext.Provider value={statusContext()}>
        {children}
    </StatusContext.Provider>

)

export default StatusProvider