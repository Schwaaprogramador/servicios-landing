import React from 'react'
import { motion } from "framer-motion";


const Verbum = () => {
  return (
   
    <div className='flex flex-col justify-end w-screen items-end'>
      <motion.p 
      initial={{ y: -200, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
       
      }}
      class="text-[200px] text-black font-extrabold">VERBUM
      </motion.p>

      <motion.p 
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.5 }}
      class="text-2xl text-black font-light">SOFTWARE DEVELOPMENT
      </motion.p>

    </div>
   
  )
}

export default Verbum
