import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">


      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        {/*--------------------------------- vertical line starts------------------------------------ */}

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/*--------------------------------- vertical line ends------------------------------------ */}


        {/*--------------------------- Intoduction starts--------------------------------*/}
        <div>
          <h1 className={`${styles.heroHeadText}
           text-white`}>Hi, I'm <span className="text-[#915eff]">Hemant
            </span>
          </h1>

          <p>I develop front-end, backend as well as  <br />
            Full Stack Web Applications using MERN stack
          </p>
        </div>

      </div>
      {/*--------------------------- Intoduction ends--------------------------------*/}

      <ComputersCanvas />

      <div className="absolute bottom-4  w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
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