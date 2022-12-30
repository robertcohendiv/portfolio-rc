import React from 'react'

type Props = {}

function Projects({}: Props) {
    const projects =[1,2,3,4,5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto item-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className='flex relative overflow-hidden flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto items-center z-20"'>
        {projects.map((project) => (
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center">
            <img src="https://cdn.sanity.io/images/ltuexkre/production/af7ca995a796d0698cf9121a4a0795b5022b6be-666×375.png"
             alt=""
           />

            <div> 
              <h4>Case study 1 of 3: ups clnone </h4>
            </div>

            </div>
        ))}

      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
      
    </div>
  );
}

export default Projects