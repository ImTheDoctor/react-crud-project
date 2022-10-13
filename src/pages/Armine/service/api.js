 import axios from 'axios';

const API_URL = 'http://localhost:7000/api'

export const addUser = async (data) => {
    try {
        return await axios.post(`${API_URL}/user`, data)
    }catch(error){
        console.log('ERROR: while calling addUser api ', error.message)
    } 
}

export const getUsers = async () => {
    try {
        return await axios.get(`${API_URL}/users`);
    } catch (error) {
        console.log('ERROR: while calling getUsers api', error.message)
    }
} 
export const getUser = async (id) => {
    try {
        return await axios.get(`${API_URL}/user/${id}`);
    } catch (error) {
        console.log('ERROR: while calling getUsers api', error.message)
    }
} 
export const editUser = async (data, id) => {
    try {
        return await axios.patch(`${API_URL}/user/${id}`, data);
    } catch (error) {
        console.log('ERROR: while calling editUsers api', error.message)
    }
} 
export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${API_URL}/user/${id}`)
    }catch (error) {
        console.log('ERROR: while calling deleteUsers api', error.message)
    }
}