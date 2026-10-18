import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getStudentById, UpdateStudents } from '../services/StudentService';

const EditStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    sid: "",
    email: "",
    gender: "",
    gender: ""
  })
  const {id} = useParams();
  
  console.log(student)
  let myNavigate = useNavigate();

  let fetchStudent = async () => {
    try {

      let stu = await getStudentById(id);
      setStudent(stu);
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    fetchStudent(id);
  }, []);

  let { name, sid, email, phoneNumber, gender } = student;

  let handleChange = (e) => {

    let { value, name } = e.target

    setStudent({ ...student, [name]: value })
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (!name || !sid || !email || !gender || !phoneNumber)
        return alert("fill all the input fields")

      myNavigate(-1)



      // await axios.post("http://localhost:3000/students",student)

      //with api.js
      await UpdateStudents(id,student);

      alert("Update done successfully")

      setStudent({
        name: "",
        sid: "",
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

    <div className='addStudent'>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='enter your name' value={name} onChange={handleChange} name='name' />
        <input type="text" placeholder='enter your id' value={sid} onChange={handleChange} name='sid' />
        <input type="text" placeholder='enter your email' value={email} onChange={handleChange} name='email' />
        <input type="text" placeholder='enter your phone number' value={phoneNumber} onChange={handleChange} name='phoneNumber' />
        <input type="text" placeholder='enter your gender' value={gender} onChange={handleChange} name='gender' />
        <button>Update</button>
      </form>
    </div>

  )
}

export default EditStudent