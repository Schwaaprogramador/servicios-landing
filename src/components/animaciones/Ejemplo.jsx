import React from 'react'
import { motion } from "framer-motion";

const Ejemplo = () => {
  return (
    <div>
      <div className="relative overflow-hidden h-12">
        <motion.span
          className="text-white text-4xl font-bold block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          ¡Hola, Mundo!
        </motion.span>
      </div>

      <motion.div
  initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
  whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
/>
    </div>
  )
}

export default Ejemplo
