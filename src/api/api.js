import axios from "axios";

export const getAgendasR = async() => await axios.get('/agendas')
export const createAgendaR = async(agenda) => await axios.post('/agendas/add', agenda)
export const deleteAgendaR = async(id) => await axios.delete('/agendas/delete/' + id);
export const getAgendaByIDR = async(id) => await axios.get('/agendas/' + id);
export const editAgendaR = async(id, updateAgenda) => await axios.put(`/agendas/update/${id}`, updateAgenda);