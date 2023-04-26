import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

export function ContactMe() {
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 
    justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl"></h3>

      <div className="flex flex-col space-y-10 ">
        <h4 className="text-4xl font-semibold text-center ">
          Entre em contato para saber mais :D!
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

        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2 ">
            <input className="contactInput" type="text" />
            <input className="contactInput" type="text" />
          </div>

          <input className="contactInput" type="text" />

          <textarea />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}
