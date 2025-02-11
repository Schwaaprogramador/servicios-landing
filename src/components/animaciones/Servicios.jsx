import { ImEarth } from "react-icons/im";
import { ImStatsDots } from "react-icons/im";
import { ImPodcast } from "react-icons/im";
import { ImCoinDollar } from "react-icons/im";
import { ImBriefcase } from "react-icons/im";
import { ImUsers } from "react-icons/im";
import { motion } from "framer-motion";



const Servicios = () => {
  return (
    <div className="w-screen h-screen">

            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-center items-center gap-10">

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-[400px] p-10 bg-[url(/si.jpg)] bg-cover flex-col gap-10 flex justify-center items-center rounded-4xl">
                    <ImEarth className="text-white text-9xl" />
                    <p className="font-extrabold text-2xl text-white">Llega a todo el mundo</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                     className="w-[400px] p-10 bg-[url(/si.jpg)] bg-cover flex-col gap-10 flex justify-center items-center rounded-4xl">
                    <ImStatsDots className="text-white text-9xl" />
                    <p className="font-extrabold text-2xl text-white">Optimiza los servicios</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }} 
                    className="w-[400px] p-10 bg-[url(/si.jpg)] bg-cover flex-col gap-10 flex justify-center items-center rounded-4xl">
                    <ImPodcast className="text-white text-9xl" />
                    <p className="font-extrabold text-2xl text-white">Posiciona tu Marca</p>
                </motion.div>

            </motion.div>


        <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex justify-center items-center gap-10 m-10">

            <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-[400px] p-10 bg-[url(/si.jpg)] bg-cover flex-col gap-10 flex justify-center items-center rounded-4xl">
                <ImCoinDollar className="text-white text-9xl"  />
                <p className="font-extrabold text-2xl text-white">Aumenta tus ventas</p>
            </motion.div >

            <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-[400px] p-10 bg-[url(/si.jpg)] bg-cover flex-col gap-10 flex justify-center items-center rounded-4xl">
                <ImBriefcase className="text-white text-9xl" />
                <p className="font-extrabold text-2xl text-white">Hacer crecer tu empresa</p>  
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-[400px] p-10 bg-[url(/si.jpg)] bg-cover flex-col gap-10 flex justify-center items-center rounded-4xl">
                <ImUsers className="text-white text-9xl " />
                <p className="font-extrabold text-2xl text-white">Conecta con tu Publico</p>
            </motion.div>

        </motion.div>
      
    </div>
  )
}

export default Servicios
