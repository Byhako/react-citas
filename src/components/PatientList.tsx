import Patient from "./Patinent"

interface IPatient {
  pet: string;
  name: string;
  email: string;
  alta: string;
  sintomas: string;
  id: string;
}

const PatientList = ({ patients, setPatient, deletePatient }:any) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen pr-10">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
          <p className="text-xl mt-5 mb-8 text-center">
            Adminstra tus {' '}
            <span className="font-bold text-indigo-600">pacientes y citas</span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-8 text-center">
            Comienza agregando pacientes {' '}
            <span className="font-bold text-indigo-600">y los verás aquí.</span>
          </p>
        </>
      )}

      <section className="md:h-screen md:overflow-y-scroll">
        {patients.map((item: IPatient, idx: number) => (
          <Patient key={item.id} {...item} setPatient={setPatient} idx={idx} deletePatient={deletePatient} />
        ))}
      </section>

    </div>
  )
}

export default PatientList
