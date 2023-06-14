import React from 'react'
import {Tilt} from "react-tilt";
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constanst'
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon})=>{
  
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
          variants={window.innerWidth <= 440 ? "" : fadeIn("right", "spring", index * 0.3, 0.75)}
        className='w-full  green-pink-gradient 
        p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 2,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 
          min-h-[280px] flex justify-evenly items-center 
          flex-col'


        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain scale-[2]'/>
          <h3 className='text-white text-[20px] font-bold text-center'
          >{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
    <>
      <motion.div variants={window.innerWidth <= 440 ? "" : textVariant()}>
        <p className={styles.sectionSubText}>
          INTRODUCCIÓN
        </p>
        <h2 className={styles.sectionHeadText}>
          ¿Quien soy?
        </h2>
      </motion.div>

      <motion.p 
        variants={window.innerWidth <= 440 ? "" : fadeIn("","", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl
        leading-[30px]'
      >
        Soy un apasionado desarrollador de software especializado en el desarrollo web. Poseo conocimientos en 
        TypeScript y JavaScript, así como experiencia en frameworks como React. Además, cuento con conocomientos en Node.js y MongoDB. 
        Mi constante deseo de aprendizaje me impulsa a buscar nuevos desafíos que pongan a prueba mis habilidades y conocimientos, ya sea construyendo proyectos propios
        o realizando desafios todo con el objetivo de mejorar mi productividad y ofrecer soluciones cada vez más innovadoras.
      </motion.p>

      <p className={`${ styles.sectionSubText } mt-10 `}>COMPETENCIAS</p>
      <div className='mt-20 flex flex-wrap gap-10 xs:justify-center'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} 
              index={index} {...service}/>
          ))
        }

      </div>
    </>
  )
}

export default SectionWrapper(About,"about")