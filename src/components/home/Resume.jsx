import { motion } from "motion/react"
import { fadeInContainer, fadeInItem, slideInContainer, slideInItem } from "../../api/animations"
import { Title } from "../ui"

export default function
    () {
    return (
        <motion.div
            className="mb-20"
            variants={fadeInContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.div
                variants={fadeInItem}
            >
                <Title hierachy="h2">Un poco de nuestra <span className="text-primary">historia</span></Title>
            </motion.div>
            <motion.p
                className="text-base lg:text-2xl mb-12"
                variants={fadeInItem}
            >Más de 70 años de tradición familiar y excelencia en la extracción de arena fluvial.</motion.p>
            <div className="flex flex-col lg:flex-row xl:flex-col 2xl:flex-row gap-12">
                <motion.figure
                    className="lg:max-w-[450px] xl:max-w-full 2xl:max-w-[600px]"
                    variants={fadeInItem}
                >
                    <img src="/media/gallery/arenera-diagonal.jpeg" alt="Arenera vista en diagonal" className="w-full rounded-md" />
                </motion.figure>
                <motion.p
                    className="text-base lg:text-2xl col-span-5 md:col-span-2 my-auto flex-1"
                    variants={fadeInItem}
                >Arenera Padua nació en 1952, fundada por inmigrantes italianos provenientes de Ancona y Porto Recanati, quienes trajeron su visión y esfuerzo a Argentina para establecer una empresa dedicada a la navegación fluvial y la extracción de arena. Desde sus inicios, ha mantenido una estructura familiar que prioriza relaciones cercanas con su equipo y clientes, sentando las bases de un servicio confiable y humano. Hoy, liderada por descendientes de sus fundadores, la empresa combina tradición e innovación en técnicas de succión y navegación fluvial, consolidándose como un actor destacado en el sector tras más de 70 años de trayectoria.</motion.p>
            </div>
        </motion.div>
    )
}
