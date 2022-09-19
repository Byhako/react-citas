import Patient from "./Patinent"

const PatientList = () => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Adminstra tus {' '}
        <span className="font-bold text-indigo-600">pacientes y citas</span>
      </p>

      <Patient />
      <Patient />
      <Patient />
    </div>
  )
}

export default PatientList
