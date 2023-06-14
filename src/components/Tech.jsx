import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { nextTechnologies, technologies } from "../constanst";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">WHAT I HAVE LEARN</p>
      <h1 className="w-full text-center text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"> Tecnologias</h1>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <img src={technology.icon} alt="" />
        </div>
      ))}

      <h1 className="w-full text-center text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"> Proximas Tecnologias</h1>
      {nextTechnologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <img src={technology.icon} alt="" />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");