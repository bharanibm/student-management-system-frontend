import React, { useState } from 'react'
import axios from "axios"
import { addStudents } from '../services/StudentService';

const AddStudent = () => {

    const [student , setStudent ] = useState({
        sname : "",
        sid : "",
        semail : "",
        phNo : "",
        gender : ""
    })

    let {sname , sid , semail,phNo , gender} = student ;

    let handleChange = (e)=>{

        let {value , name} = e.target

        setStudent({...student, [name] : value })
    }

    let handleSubmit = async (e)=>{
        e.preventDefault();
        try{

            if(!sname || !sid || !semail || !gender || !phNo)
                return alert("fill all the input fields")
    
            console.log(student)

            // await axios.post("http://localhost:3000/students",student)

            //with api.js
            await addStudents(student);
    
            alert("register done successfully")

            setStudent({
                sname : "",
                sid : "",
                semail : "",
                phNo : "",
                gender : ""
            })
        }
        catch(err)
        {
             console.log(err)
        }
    }
  return (
    <div className='addStudent'>

           <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='enter your name'value={sname} onChange={handleChange} name='sname'/>
                <input type="text" placeholder='enter your id' value={sid} onChange={handleChange} name='sid'/>
                <input type="text" placeholder='enter your email' value={semail} onChange={handleChange} name='semail'/>
                <input type="text" placeholder='enter your phone number' value={phNo} onChange={handleChange} name='phNo'/>
                <input type="text" placeholder='enter your gender' value={gender} onChange={handleChange} name='gender'/>
                <button>register</button>
           </form>
    </div>
  )
}

export default AddStudent