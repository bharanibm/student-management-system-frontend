
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { deleteStudent, getStudents, searchByName } from '../services/StudentService';
import { useNavigate } from 'react-router-dom';

const DisplayStudents = () => {

    let myNavigate = useNavigate();
    let [students, setStudents] = useState([]);

    let [searchName, setSearchName] = useState("");

    let aaa = async () => {
        // try {
        //     let res = await axios.get("http://localhost:3000/students");
        //     setStudents(res.data);
        // } catch (error) {
        //     console.log(error);

        // }

        //with api.js
        try {

            let res = await getStudents();
            console.log(res);
            setStudents(res);
        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => { aaa() }, []);


    function handleEdit(id) {
        console.log(id);
        myNavigate(`/edit/${id}`);

    }
    async function handleDelete(id) {
        console.log(id);
        try {
            await deleteStudent(id);
            let data = await getStudents();
            setStudents(data);

        } catch (error) {
            console.log(error);

        }

    }


    async function handleSearch(name) {
        try {
            let res = await searchByName(name);
            console.log(res);   
            setStudents(res)
            
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div>
            <nav>
                <h1>DisplayStudents</h1>
                <div>
                    <input type="text" placeholder="Search name"
                        onChange={(e) => {
                            setSearchName(e.target.value)
                        }}
                        value={searchName}
                    />
                    <button
                        onClick={() => { handleSearch(searchName) }}
                    >Search</button>

                </div>
            </nav>

            <table border={2}>
                <tbody>
                    {students.map((s) => {
                        return <tr key={s.sid}>
                            <td>
                                {s.sid}
                            </td>
                            <td>
                                {s.name}
                            </td>
                            <td>
                                {s.email}
                            </td>
                            <td>
                                {s.phoneNumber}
                            </td>
                            <td>
                                {s.gender}
                            </td>
                            <td><button
                                onClick={() => {
                                    handleEdit(s.sid)
                                }}
                            >Edit</button></td>
                            <td><button
                                onClick={() => {
                                    handleDelete(s.sid)
                                }}
                            >Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>


    )


}

export default DisplayStudents