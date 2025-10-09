import { FlipWords } from "./FlipWords";
import { motion } from 'framer-motion'


const HeroText = () => {
  const words = ["Современные", "Сексуальные", "Масштабируемые"]
  const variants = {
    hidden: {opacity: 0, x: -50},
    visible: {opacity: 1, x: 0}
  }

  return (
   <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text"> 

      <div className="flex-col hidden md:flex c-space">

        <motion.h1 
           variants={variants} 
           initial="hidden"
           animate="visible"
           transition={{delay: 1.2}}
           className="text-4xl font-medium">Привет, я Леонид.      
       </motion.h1>

      <div className="flex flex-col items-start">
        <motion.p   
           variants={variants} 
           initial="hidden"
           animate="visible" 
           transition={{delay: 1.2}}
         className="text-5xl mb-2">
          Разработчик, <br/> которому просто нравится делать
        </motion.p>
        <div>
          <FlipWords className="font-black text-white text-7xl" words={words}/>
        </div>
        <div className="text-5xl">
          веб-приложения.
        </div>
      </div>
      </div>
      
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p   
           variants={variants} 
           initial="hidden"
           animate="visible" 
           transition={{delay: 1.4}} className="text-4xl font-medium"> Привет, я Леонид. </motion.p>
        <div>
          <motion.p   
           variants={variants} 
           initial="hidden"
           animate="visible"
           transition={{delay: 1.5}} className="text-5xl font-neutral-300">
            Разрабатываю
          </motion.p>
           <div>
            <FlipWords className="font-bold text-white text-6xl" words={words}/>
           </div>
          <div className="text-5xl font-neutral-300">
            Веб-приложения
          </div>
        </div>
      </div>

   </div>
  )
}
export default HeroText;
