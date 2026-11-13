import React, { useState } from 'react'
import { addStudents } from '../services/StudentService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import handleApiError from '../utils/handleApiError';

const AddStudent = () => {
    let myNavigate = useNavigate();
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
                // return alert("fill all the input fields")
                return toast.warning("Please fill all fields!");

            console.log(student)


            let res = await addStudents(student);

            // alert("register done successfully");
            toast.success("Student added successfully!");

            myNavigate(-1);

            setStudent({
                name: "",
                email: "",
                phoneNumber: "",
                gender: ""
            })

        }
        catch (err) {

            handleApiError(err);
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-8">

                <form onSubmit={handleSubmit}>

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Add New Student
                    </h2>

                    <p className="text-sm text-gray-500 mb-6">
                        Enter the student details below
                    </p>

                    {/* Name */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={handleChange}
                            name="name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleChange}
                            name="email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                    </div>

                    {/* Phone */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your phone number"
                            value={phoneNumber}
                            onChange={handleChange}
                            name="phoneNumber"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                    </div>

                    {/* Gender */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Gender
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your gender"
                            value={gender}
                            onChange={handleChange}
                            name="gender"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
                        >
                            Add Student
                        </button>

                        <button
                            type="button"
                            onClick={() => myNavigate(-1)}
                            className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-300 transition duration-200"
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )

}

export default AddStudent