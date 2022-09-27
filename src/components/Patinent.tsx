interface IPatient {
  pet: string;
  name: string;
  email: string;
  alta: string;
  sintomas: string;
}

const Patient = (props: IPatient) => {
  const { pet, name, email, alta, sintomas } = props

  return (
    <div className="bg-white mt-5 shadow-md px-5 pt-8 pb-5 rounded-md">
      <p className="mt-3 font-bold mb-3 text-gray-700 uppercase">
        Nombre: {' '}
        <span className="font-normal normal-case">{pet}</span>
      </p>
      <p className="mt-3 font-bold mb-3 text-gray-700 uppercase">
        Propietario: {' '}
        <span className="font-normal normal-case">{name}</span>
      </p>

      <p className="mt-3 font-bold mb-3 text-gray-700 uppercase">
        Email: {' '}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="mt-3 font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {' '}
        <span className="font-normal normal-case">{alta}</span>
      </p>

      <p className="mt-3 font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {' '}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-5">
        <button
          type="button"
          className="py-1 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg"
        >Editar</button>
        <button
          type="button"
          className="py-1 px-8 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Patient
