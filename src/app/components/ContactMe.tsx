'use client'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form'
type FormData = {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

export function ContactMe() {
  const { register, handleSubmit } = useForm<FormData>()
  const onSubmit = handleSubmit(
    (formData) =>
      (window.location.href = `mailto:matheusfonteles@hotmail.com?subject=${formData.assunto}
    &body=Olá, meu nome é${formData.nome}. ${formData.mensagem} (${formData.email})`),
  )

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 
    justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl"></h3>

      <div className="flex flex-col space-y-10 ">
        <h4 className="text-4xl font-semibold text-center ">
          Entre em contato para saber mais :D!{' '}
          <span className="decoration-[#f7ab0a]/50 underline">
            Vamos conversar!
          </span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+81 973245224</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Recife - PE / Brasil</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+81 973245224</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">matheusfonteles@hotmail.com</p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2 ">
            <input
              className="contactInput"
              {...register('nome')}
              placeholder="Nome"
              type="text"
            />
            <input
              className="contactInput"
              {...register('email')}
              placeholder="Email"
              type="email"
            />
          </div>

          <input
            className="contactInput"
            {...register('assunto')}
            type="text"
            placeholder="Assunto"
          />

          <textarea
            className="contactInput"
            {...register('mensagem')}
            placeholder="mensagem"
          />

          <button className="bg-[#f7AB04] py-5 px-10 rounded-md text-black font-bold text-lg">
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
