import api from '../api.js'

export const getStudents = async () => {
    try {
        let res = await api.get('/'); 
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const addStudents = async (payload) => {
    
    try {
        let res = await api.post('/' , payload);
        return res.data;
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteStudent   = async (id) => {
    try {
        let res = await api.delete(`/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
        
    }
}
export const getStudentById = async (id) => {
    try {
        let res = await api.get(`/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
        
    }
}

export const  UpdateStudents = async (id,payload) => {
    try {
        
        let res = await api.put(`/${id}`, payload);
        return res.data;

    } catch (error) {
        console.log(error);
        
    }
}

export const searchByName = async (name) => {
    try {
        let res = await api.get(`/search?name=${name}`);
        console.log(res);
        
        return res.data;
    } catch (error) {
        console.log(error);
        
    }
}