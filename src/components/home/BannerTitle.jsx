import { motion } from "motion/react"
import { slideInContainer, slideInItem } from "../../api/animations"

const BannerTitle = () => {
    return (
        <motion.div
            className="min-h-screen gap-6 flex flex-col justify-center text-large lg:text-[80px] 2xl:text-extra-large"
            variants={slideInContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="leading-none font-anton uppercase">
                <motion.p variants={slideInItem} className="text-transparent font-outline-1 lg:font-outline-2">Somos</motion.p>
                <motion.h1 variants={slideInItem} className="text-secondary">Arenera Padua</motion.h1>
            </div>
            <motion.p
                className="font-light text-lg lg:text-xl 2xl:text-2xl mb-8 text-white"
                variants={slideInItem}
            >Extracción y comercialización de arena fina</motion.p>
            <motion.a
                variants={slideInItem}
                href="#process"
                className="font-light text-lg lg:text-xl 2xl:text-2xl text-white bg-primary px-4 py-2 xl:py-4 xl:px-8 inline-block max-w-max rounded-md transition-colors hover:bg-secondary hover:text-dark"
            >Conocenos más &rarr;</motion.a>
        </motion.div>
    )
}

export default BannerTitle