import { useForm, SubmitHandler } from "react-hook-form";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    // Aquí puedes agregar la lógica para enviar los datos del formulario
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="relative z-50">
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center flex-1 p-8">
        <div className="flex flex-col items-center justify-center w-full max-w-lg p-8 mt-10 bg-white rounded-md shadow-md">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">Contacto</h1>
          <p className="mb-8 text-lg text-gray-600">
            ¿Tienes preguntas o comentarios? ¡Nos encantaría saber de ti!
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Este campo es requerido" })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Tu nombre"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Este campo es requerido",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Ingresa un correo electrónico válido",
                  },
                })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Tu correo electrónico"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={6} // Aumenta el número de filas para un área de texto más grande
                {...register("message", {
                  required: "Este campo es requerido",
                })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Tu mensaje"
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="px-6 py-3 text-white transition duration-300 transform bg-yellow-500 rounded-full hover:bg-yellow-600 hover:shadow-lg hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
