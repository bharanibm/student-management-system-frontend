import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import DisplayStudents from './components/DisplayStudents'
import AddStudent from './components/AddStudent'
import EditStudent from './components/EditStudent'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>

      <BrowserRouter>

        <nav className="bg-slate-900 text-white px-6 py-4 shadow-lg">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-wide">
              SM App
            </h1>

            <ul className="flex items-center gap-6">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-white transition duration-200"
                >
                  Students
                </Link>
              </li>
              <li>
                <Link
                  to="/add"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-200"
                >
                  + Add Student
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<DisplayStudents />}></Route>
          <Route path='/add' element={<AddStudent />}></Route>
          <Route path='/edit/:id' element={<EditStudent />} ></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  )
}

export default App