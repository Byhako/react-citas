import { useState, useEffect } from "react"
import Error from './Error'

interface Patient {
  pet: string;
  name: string;
  email: string;
  alta: string;
  sintomas: string;
  id: string;
}

interface Form {
  patient: any;
  patients: Patient[];
  setPatient: any;
  setPatients: any;
}


const Form = ({ setPatients, patients, patient, setPatient }: Form) => {
  const [pet, setPet] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [alta, setAlta] = useState<string>('')
  const [sintomas, setSintomas] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    if (patient.name) {
      setPet(patient.pet)
      setName(patient.name)
      setEmail(patient.email)
      setAlta(patient.alta)
      setSintomas(patient.sintomas)
    }
  }, [patient])


  const handleSubmit = (e: any) => {
    e.preventDefault()

    if ([pet, name, email, alta, sintomas].includes('')) {
      setError(true)
    } else {
      setError(false)
      if (patient.id) {
        // Edito paciente
        const newListPatients = [...patients]
        newListPatients[patient.idx] = {
          pet,
          name,
          email,
          alta,
          sintomas,
          id: patient.id
        }
        setPatients(newListPatients)
        setPatient({})
      } else {
        // crear paciente
        setPatients([
          ...patients,
          { 
            pet, name, email, alta, sintomas,
            id: `${Math.random().toString(34).substring(2)}${Date.now().toString(34)}`
          }
        ])
      }
      setPet('')
      setName('')
      setEmail('')
      setAlta('')
      setSintomas('')
    }
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className=" text-lg mt-5 text-center mb-8">
        Agrega pacientes y {' '}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 md:w-4/5 lg:w-3/4 mx-auto mb-10"
      >
        {error && <Error>Te faltan llenar campos</Error>}
        <label
          className="block text-gray-700 uppercase font-bold"
          htmlFor="mascota"
        >
          Nombre Mascota
        </label>
        <input
          type="text"
          placeholder="Nombre Mascota"
          className="border-2 w-full p-2 mt-2 rounded-md mb-4"
          id='mascota'
          value={pet}
          onChange={(e) => setPet(e.target.value)}
        />

        <label
          className="block text-gray-700 uppercase font-bold"
          htmlFor="owner"
        >
          Nombre Propietario
        </label>
        <input
          type="text"
          placeholder="Nombre Propietario"
          className="border-2 w-full p-2 mt-2 rounded-md mb-4"
          id='owner'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label
          className="block text-gray-700 uppercase font-bold"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          className="border-2 w-full p-2 mt-2 rounded-md mb-4"
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label
          className="block text-gray-700 uppercase font-bold"
          htmlFor="alta"
        >
          Alta
        </label>
        <input
          type="date"
          className="border-2 w-full p-2 mt-2 rounded-md mb-4"
          id='alta'
          value={alta}
          onChange={(e) => setAlta(e.target.value)}
        />

        <label
          className="block text-gray-700 uppercase font-bold"
          htmlFor="sintomas"
        >
          Sintomas
        </label>
        <textarea
          className="border-2 w-full p-2 mt-2 rounded-md mb-4"
          id='sintomas'
          placeholder="Describe los sintomas"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        />

        <input
          type="submit" 
          value={patient.pet ? 'Editar paciente' : 'Agregar paciente'}
          className="bg-indigo-600 w-full p-2 text-white uppercase font-bold cursor-pointer rounded-sm transition-all hover:bg-indigo-800"
        />

      </form>
    </div>
  )
}

export default Form
