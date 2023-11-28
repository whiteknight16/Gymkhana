import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Importing elements 
import Training from "./pages/Training/Training"
import Discover from './pages/Discover/Discover'
import Report from './pages/Report/Report'
import Exercise from './pages/Exercise/Exercise'
import DetailBlog from './pages/DetailBlog/DetailBlog'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Edit from './pages/Edit/Edit'
import Add from './pages/Add/Add'
import Custom from './pages/Custom/Custom'
import CustomExercises from './pages/CustomExercises/CustomExercises'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Training />}></Route>
      <Route path='/discover' element={<Discover />}></Route>
      <Route path='/discover/:id' element={<DetailBlog />}></Route>
      <Route path='/discoverlog' element={<Discover />}></Route>
      <Route path='/report' element={<Report />}></Route>
      <Route path='/absbeginner' element={<Exercise />}></Route>
      <Route path='/absinter' element={<Exercise />}></Route>
      <Route path='/chestbeginner' element={<Exercise />}></Route>
      <Route path='/chestinter' element={<Exercise />}></Route>
      <Route path='/legsbeginner' element={<Exercise />}></Route>
      <Route path='/legsinter' element={<Exercise />}></Route>
      <Route path='/auth/login' element={<Login />}></Route>
      <Route path='/auth/register' element={<Register />}></Route >
      <Route path='/edit/:id' element={<Edit />}></Route >
      <Route path='/add' element={<Add />}></Route >
      <Route path='/customAdd' element={<Custom />}></Route >
      <Route path='/customroutine' element={<CustomExercises />}></Route >



    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
