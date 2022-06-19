import React, { createContext, useContext, useState, useEffect } from "react";
import { getAgendasR, createAgendaR, deleteAgendaR, editAgendaR, getAgendaByIDR } from "../api/api";

const StateContext = createContext();

export const useAgendas = () => { 
    const context = useContext(StateContext);
    return context;
    
}

export const StateProvider = ({ children }) => {
    const[agendas, setAgendas] = useState([]);

    const getAgenda = async() => {
        const res = await getAgendasR();
        setAgendas(res.data);
    }
    const createAgenda = async(agenda) => {
       const res =  await createAgendaR(agenda)
       setAgendas([...agendas, res.data]);
    }
    const deleteAgenda = async(id) => {
        const res = await deleteAgendaR(id);
        if(res.status === 204){
            setAgendas(agendas.filter((agenda) => agenda._id !== id));
        }
    }
    const getAgendaByID = async(id) => {
        const res = await getAgendaByIDR(id);
        return res.data;

    }
    const editAgenda = async(id, updatedAgenda) => {
        const res = await editAgendaR(id, updatedAgenda);
        setAgendas(agendas.map((agenda) => agenda._id === id ? res.data : agenda ));
    }
    useEffect(() => {
        getAgenda();
      }, []);
    
    

    return <StateContext.Provider value={{
        agendas,
        setAgendas,
        getAgenda,
        createAgenda,
        deleteAgenda,
        editAgenda,
        getAgendaByID
        
        }}>
        {children}
    </StateContext.Provider>

}