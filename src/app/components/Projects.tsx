// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'

import Image from 'next/image'

export function Projects() {
  const projects = [1, 2, 3, 4, 5]

  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        projetos
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden 
      snap-x snap-mandatory z-20"
      >
        {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen"
          >
            <Image
              src={
                'https://yt3.googleusercontent.com/ytc/AGIKgqMyeURlC9A1NyCFMkUGNlZdJD65UrY-PT6drmTYVA=s900-c-k-c0x00ffffff-no-rj'
              }
              alt="sla"
              width={400}
              height={400}
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl font-semibold text-center">
                <span className="underline decoration-[#f7AB0A]/50">
                  {' '}
                  Projeto {i + 1} de {projects.length}:
                </span>{' '}
                Ignite Call
              </h4>

              <p className="text-lg text-center md:text-left ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                possimus. Rerum est sequi in aliquid veritatis neque error velit
                ex, architecto recusandae, saepe porro obcaecati. Quia quidem
                voluptates obcaecati aperiam. Laborum libero iste, magni ea
                minus maiores aut, quis, reprehenderit magnam recusandae
                repellendus velit. Iste architecto quas, temporibus odio non
                possimus ducimus at aliquam aut nemo ullam alias necessitatibus.
                Magnam?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7AB0A]/10 left-0 h-[400px] -skew-y-12" />
    </div>
  )
}
