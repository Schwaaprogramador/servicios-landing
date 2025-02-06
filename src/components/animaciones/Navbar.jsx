import React from 'react'
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div>
      <motion.div 
      initial={{ y: -200, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
       
      }}
      
      class="w-full flex gap-10 justify-between p-10">
		<p class="font-bold text-xl"> Services </p> 
		<p class="font-bold text-xl"> About Us</p>
		<p class="font-bold text-xl"> Contact Us</p>
	</motion.div>
    </div>
  )
}

export default Navbar
