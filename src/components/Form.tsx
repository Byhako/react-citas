const Form = () => {

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className=" text-lg mt-5 text-center mb-8">
        Agrega pacientes y {' '}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 w-3/4 mx-auto mb-10">
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
        />

        <input
          type="submit" 
          value='Agregar paciente'
          className="bg-indigo-600 w-full p-2 text-white uppercase font-bold cursor-pointer rounded-sm transition-all hover:bg-indigo-800"
        />

      </form>
    </div>
  )
}

export default Form
