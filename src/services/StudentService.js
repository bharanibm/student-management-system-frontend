import axios from 'axios';
import api from '../api.js'

export const getStudents = async () => {
    try {
        let res = await api.get('/'); 
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;

    }
}

export const addStudents = async (payload) => {
    
    try {
        let res = await api.post('/' , payload);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}

export const deleteStudent   = async (id) => {
    try {
        let res = await api.delete(`/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}
export const getStudentById = async (id) => {
    try {
        let res = await api.get(`/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}

export const  UpdateStudents = async (id,payload) => {
    try {
        
        let res = await api.put(`/${id}`, payload);
        return res.data;

    } catch (error) {
        console.log(error);
        throw error;
        
    }
}

export const searchByName = async (name) => {
    try {
        let res = await api.get(`/search?name=${name}`);
        console.log(res);
        
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}

//only pagination
{/** 
    export const fetchPage = async(page , pageSize )=>{
    try {
        let res = await api.get(`/page?page=${page}&size=${pageSize}`);
        return res.data
        
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}*/}

//search and pagination
export const fetchPage = async(name, page , pageSize )=>{
    try {
        let res = await api.get(`/page?name=${encodeURIComponent(name)}&page=${page}&size=${pageSize}`);
        console.log(res);
        
        return res.data
        
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}