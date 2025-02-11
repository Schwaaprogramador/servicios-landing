import React from 'react'
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className='fixed mt-10 z-10 bg-white border-2 border-black rounded-full w-[600px] h-12 items-center flex'>
      <motion.div 
      initial={{ y: -200, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
       
      }}
      
      class="w-full flex gap-10 justify-between p-10 text-gray-400">
        
		<a href='#services' class="font-thin text-xl text-gray-400 hover:text-black"> Services </a> 
		<a href='#about' class="font-thin text-xl text-gray-400 hover:text-black"> About Us</a>
		<a href='#contact' class="font-thin text-xl text-gray-400 hover:text-black"> Contact Us</a>
	</motion.div>
    </div>
  )
}

export default Navbar
