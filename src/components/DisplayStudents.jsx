
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { deleteStudent, fetchPage, getStudents, searchByName } from '../services/StudentService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const DisplayStudents = () => {

    let myNavigate = useNavigate();
    let [students, setStudents] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize] = useState(6);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);

    let [searchName, setSearchName] = useState("");

    // let load = async (page) => {

    //     try {

    //         // let res = await getStudents();
    //         let res = await fetchPage(searchName, page, pageSize)
    //         console.log(res);
    //         setStudents(res.content);
    //         setTotalElements(res.totalElements);
    //         setCurrentPage(res.number);
    //         setTotalPages(res.totalPages);
    //     } catch (error) {
    //         console.log(error);

    //     }

    // }
    let load = async (page = 0, name = searchName) => {
        try {
            let res = await fetchPage(name, page, pageSize);

            if (!res) return;

            setStudents(res.content);
            setTotalElements(res.totalElements);
            setCurrentPage(res.number);
            setTotalPages(res.totalPages);

        } catch (error) {
            console.log(error);
        }
    };

    // useEffect(() => { load(0) }, [searchName]);
    // useEffect(() => { load(0) }, []);
    useEffect(() => {

        const page = Number(params.get("page") ?? 0);
        const name = params.get("name") ?? "";

        setSearchName(name);
        load(page, name);
    }, []);


    function handleEdit(id) {
        console.log(id);
        // myNavigate(`/edit/${id}`);
        myNavigate(
            `/edit/${id}?page=${currentPage}&name=${encodeURIComponent(searchName)}`
        );
    }


    // async function handleDelete(id) {
    //     console.log(id);
    //     try {
    //         let res = await deleteStudent(id);

    //         // let data = await getStudents();
    //         // setStudents(data);
    //         // load(currentPage);


    //         const nextTotal = totalElements - 1;
    //         const nextTotalPages = Math.ceil(nextTotal / pageSize);

    //         const nextPage = Math.min(
    //             currentPage,
    //             Math.max(0, nextTotalPages - 1)
    //         );
    //         load(nextPage);



    //     } catch (error) {
    //         console.log(error);

    //     }

    // }

    async function handleDelete(id) {
        try {
            await deleteStudent(id);

            toast.success("Student deleted successfully!");

            const nextTotal = totalElements - 1;
            const nextTotalPages = Math.ceil(nextTotal / pageSize);

            const nextPage = Math.min(
                currentPage,
                Math.max(0, nextTotalPages - 1)
            );

            await load(nextPage, searchName);

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }
    }


    // async function handleSearch(name) {
    //     try {
    //         if (searchName.trim() === "") {
    //             return;
    //         }
    //         //before paginnation
    //         // let res = await searchByName(name);
    //         // console.log(res);
    //         // setStudents(res);
    //         load(currentPage);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    async function handleSearch() {
        load(0, searchName);
    }

    const handleShowAll = () => {
        setSearchName("");
        load(0, "");
    };


    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6">
                <nav>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Student Management
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-3 mb-6">
                        <input type="text" placeholder="Search name"
                            onChange={(e) => {
                                setSearchName(e.target.value);
                            }}
                            value={searchName}
                            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" />
                        <button
                            onClick={() => { handleSearch(searchName) }}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
                        >Search</button>
                        <button onClick={handleShowAll}
                            className="bg-slate-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-700 transition duration-200"
                        >
                            Show All
                        </button>

                    </div>
                </nav>

                <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table border={2}
                        className="w-full text-sm text-left text-gray-700"
                    >
                        <thead className="bg-slate-100 text-gray-700 uppercase text-xs">
                            <th className="px-6 py-4 font-semibold">Reg.No</th>
                            <th className="px-6 py-4 font-semibold">Name</th>
                            <th className="px-6 py-4 font-semibold">email</th>
                            <th className="px-6 py-4 font-semibold">phone number</th>
                            <th className="px-6 py-4 font-semibold">gender</th>
                            <th className="px-6 py-4 font-semibold">actions</th>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {(students.length > 0) ? students.map((s) => {
                                return <tr key={s.sid} className="hover:bg-blue-50 transition duration-150" >
                                    <td className="px-6 py-4 whitespace-nowrap" >
                                        {s.sid}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {s.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {s.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {s.phoneNumber}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {s.gender}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button
                                            onClick={() => {
                                                handleEdit(s.sid)
                                            }}
                                            className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition duration-200 mx-1.5"
                                        >Edit</button>
                                        <button
                                        onClick={() => {
                                            handleDelete(s.sid)
                                        }}
                                        className="bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700 transition duration-200"
                                    >Delete</button></td>
                                </tr>
                            })
                                :
                                <h1>no students found...!!!</h1>
                            }
                        </tbody>
                    </table>
                </div>


                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 font-medium">
                        Total Students: {totalElements}
                    </p>
                    <button
                        onClick={() => load(currentPage - 1)}
                        disabled={currentPage === 0}
                        className="px-4 py-2 rounded-lg  border border-gray-300 text-gray-700 hover:bg-gray-100 transition duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>

                    <span className="text-sm font-semibold text-gray-700 px-3">
                        Page {currentPage + 1} of {totalPages}
                    </span>

                    <button
                        onClick={() => load(currentPage + 1,)}
                        disabled={currentPage >= totalPages - 1}
                    // onClick={()=>console.log(currentPage)}
                    className="px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-blue-700 transition duration-200 disabled:bg-blue-300 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>


    )


}

export default DisplayStudents