import React from 'react'
import { motion } from "framer-motion";


const Verbum = () => {
  return (
   
    <div className='flex flex-col items-center justify-start w-screen mt-[-121px]'>

      <motion.p 
      initial={{ y: -200, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut"}}
      class="text-[300px] text-black font-extrabold font-serif">
        
        VERBUM

      </motion.p>


    </div>
   
  )
}

export default Verbum
