import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import {  media2, media3 } from '../assets'


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className={`${styles.paddingX} absolute inset-0 top-[30%] left-[10%] max-w-7xl 
        mx-auto flex flex-row items-start gap-5 z-[2]
        xs:left-1`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div className='sm:backdrop-blur-sm'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            HOLA! soy <span className='text-[#915eff]'>Alejandro</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Desarrollo el arte de crear soluciones digitales a través del código, <br className='sm:block hidden'/> dando vida a ideas y construyendo el futuro
          </p>
        </div>
      </div>


    <div className=" w-[50%] h-[90%] flex flex-col justify-end place-items-center absolute bottom-0 right-[-15%] z-[1] 
    lg:right-[-30%] lg:top-[10%]
    md:h-[60%] md:top-0 
    xs:h-[50%] xs:top-0 xs:w-[80%]

    ">
      <img src={media3} alt="https://i.pinimg.com/originals/c8/21/a0/c821a035ae11015484bd27183cfd0562.jpg" className=' w-auto h-full scale-x-[-1]'/>
    </div>

    <div className=" w-auto h-[90%] flex flex-col justify-end place-items-center absolute bottom-[-20%] left-[-20%] z-[1] rotate-45 
    lg:left-[-15%] lg:bottom-[-15%]
    md:h-[50%] 
    xs:h-[40%] xs:bottom-[-10%] xs:left-[-30%]
    ">
      <img src={media2} alt="https://www.peakpx.com/es/hd-wallpaper-desktop-pscpm" className=' w-auto h-full scale-x-[-1]'/>
    </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 
          border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:"loop"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero