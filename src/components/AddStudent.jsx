import React, { useState } from 'react'
import axios from "axios"
import { addStudents } from '../services/StudentService';

const AddStudent = () => {

    const [student, setStudent] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        gender: ""
    })

    let { name, email, phoneNumber, gender } = student;

    let handleChange = (e) => {

        let { value, name } = e.target

        setStudent({ ...student, [name]: value })
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {

            if (!name || !email || !gender || !phoneNumber)
                return alert("fill all the input fields")

            console.log(student)

            // await axios.post("http://localhost:3000/students",student)

            //with api.js
            await addStudents(student);

            alert("register done successfully")

            setStudent({
                name: "",
                email: "",
                phoneNumber: "",
                gender: ""
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div clasName='addStudent'>

            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='enter your name' value={name} onChange={handleChange} name='name' />
                <input type="text" placeholder='enter your email' value={email} onChange={handleChange} name='email' />
                <input type="text" placeholder='enter your phone number' value={phoneNumber} onChange={handleChange} name='phoneNumber' />
                <input type="text" placeholder='enter your gender' value={gender} onChange={handleChange} name='gender' />
                <button>register</button>
            </form>
        </div>
    )
}

export default AddStudent