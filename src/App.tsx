import { useState, useEffect } from "react"

import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"

function App() {

  const [patients, setPatients] = useState(localStorage.getItem('patients') ? JSON.parse(localStorage.getItem('patients') ?? '') : [])
  const [patient, setPatient] = useState({})

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const deletePatient = (idx: number) => {
    const newListPatients = [...patients]
    newListPatients.splice(idx, 1)
    setPatients(newListPatients)
  }


  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-12 md:flex">
        <Form patients={patients} setPatients={setPatients} patient={patient} setPatient={setPatient} />
        <PatientList patients={patients} setPatient={setPatient} deletePatient={deletePatient} />
      </div>
    </div>
  )
}

export default App
