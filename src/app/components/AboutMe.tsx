'use client'
import { motion } from 'framer-motion'

export function AboutMe() {
  return (
    <div
      className="h-screen flex relative flex-col text-center
     md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Sobre mim!
      </h3>

      <motion.img
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full 
        object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="https://avatars.githubusercontent.com/u/92957086?v=4"
        initial={{
          x: -200,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold ">
          Aqui vai um{' '}
          <span className="underline decoration-[#F7AB04]/50">pequeno </span>
          textinho legal!
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          adipisci dolores neque, odio qui reprehenderit minus odit aspernatur
          harum iure accusamus magnam reiciendis sint itaque aliquam natus
          beatae repellendus. Laborum! Eos, blanditiis! Adipisci pariatur
          ratione corrupti laborum omnis nam dolor iure quasi, eum, sed expedita
          earum nisi sunt beatae molestiae! In consequatur quam quibusdam
          suscipit quas dolorum delectus pariatur rerum! A dolor optio, eum
          maiores fugit nisi, dignissimos mollitia temporibus error dolore
          nostrum blanditiis, ad corrupti tempore repudiandae adipisci officia
          aliquam porro quisquam ab! Impedit adipisci animi numquam et ullam?
          Nesciunt ullam impedit ex eveniet optio laudantium odit, nostrum
          voluptates saepe voluptatem illum explicabo. Ipsum dolore veniam neque
          provident facere est iusto omnis tenetur nisi? Tempora provident quos
          culpa vitae. Sed a asperiores optio deleniti distinctio culpa
          molestiae odio! Architecto unde esse vitae veniam sapiente, pariatur
          fugit laboriosam necessitatibus aperiam provident voluptatem ut,
          excepturi eaque! Vel ab labore accusamus doloribus. Consectetur
          repellat voluptatibus quis rem provident, ad veniam ipsum pariatur
          modi culpa porro, ratione consequatur libero. Incidunt temporibus
          impedit tempora quibusdam aliquam, consequuntur earum quam
          perspiciatis non tenetur totam. Provident? Error exercitationem aut
          sint cum, itaque corrupti, esse obcaecati facere quas delectus harum
          veniam assumenda eius vero neque praesentium ut magni distinctio
          provident. Eaque iste deserunt cumque eius. Voluptatibus, sed? Libero
          deleniti ut minus enim, neque itaque, ullam voluptatum eligendi
          quibusdam quisquam pariatur dolore veritatis ipsam quam similique
          adipisci veniam vero accusantium dolorum! Maxime ipsam officiis itaque
          fugiat dicta nisi.
        </p>
      </div>
    </div>
  )
}
