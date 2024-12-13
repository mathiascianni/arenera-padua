import { motion } from "motion/react"
import { slideInContainer, slideInItem } from "../../api/animations"

const Header = () => {
    return (
        <header className="min-h-screen bg-[url('./media/about-header.jpg')] bg-cover bg-center px-4 xl:px-2/12">
            <motion.div
                className="min-h-screen gap-6 flex flex-col justify-center text-large lg:text-[80px] 2xl:text-extra-large"
                variants={slideInContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="leading-none font-anton uppercase">
                    <motion.p variants={slideInItem} className="text-transparent font-outline-1 lg:font-outline-2 text-center">Un poco </motion.p>
                    <motion.h1 variants={slideInItem} className="text-secondary text-center">sobre nosotros</motion.h1>
                    <div className="text-center font-light text-lg xl:text-4xl mb-8 text-white border-2 aspect-square w-16 mt-16 animate-bounce mx-auto rounded-full flex items-center justify-center">&darr;</div>
                </div>
            </motion.div>
        </header>
    )
}

export default Header