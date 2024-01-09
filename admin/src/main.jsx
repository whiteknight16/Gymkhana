import React from 'react'
import ReactDOM from 'react-dom/client'
import Start from './components/Start/Start'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AddEditDeleteExercises from './components/AddEditDeleteExercises/AddEditDeleteExercises'
import AddEditDeleteHeadings from './components/AddEditDeleteHeadings/AddEditDeleteHeadings'
import AddEditDeleteCards from './components/AddEditDeleteCards/AddEditDeleteCards'
import EditComponent from './components/AddEditDeleteExercises/EditComponent'
import EditCardComponent from './components/AddEditDeleteCards/EditCardComponent'
import LoginComponent from "./components/LoginComponent/LoginComponent"
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Start />}></Route>
      <Route path='/exercise' element={<AddEditDeleteExercises />}></Route>
      <Route path='/headings' element={<AddEditDeleteHeadings />}></Route>
      <Route path='/cards' element={<AddEditDeleteCards />}></Route>
      <Route path='/edit/:id' element={<EditComponent />}></Route>
      <Route path='/editSubItems/:id' element={<EditCardComponent />}></Route>
      <Route path='/auth/login' element={<LoginComponent />}></Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)

