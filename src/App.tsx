import Form from './form'
import './App.css'
import { useState } from 'react'
function App() {
  const [showForm, setForm] =  useState (false);

  return (

 




    <>
{!showForm ? (
  <button onClick={() => setForm(true)}>Form</button>
) : (
  <Form onClose={() => setForm(false)} />
)}




       
    </>
  )
}

export default App
