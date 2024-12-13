import { motion } from "motion/react"
import { fadeInContainer, fadeInItem } from "../../api/animations"
import { HistorySegments } from "../about/index"
import { Title } from "../ui"
const History = () => {

    return (
        <section className="my-16">
            <motion.div
                variants={fadeInItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <Title className='text-center' hierachy={"h2"}><span className="text-primary">ARENERA PADUA</span>: UNA HISTORIA DE COMPROMISO Y CRECIMIENTO</Title>
            </motion.div>
            <motion.div
                variants={fadeInContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-16 xl:text-lg"
            >
                <motion.div variants={fadeInItem}>
                    <HistorySegments number={1}>Arenera Padua tiene sus raíces en diciembre de 1952, cuando un grupo de inmigrantes italianos, provenientes de las regiones de Ancona y Porto Recanati, decidió emprender un nuevo camino en Argentina, fundando una empresa dedicada a la navegación fluvial y a la extracción de arena. Con visión y esfuerzo, estos pioneros utilizaron los buques areneros como una solución eficiente y confiable en el rubro.
                    </HistorySegments>
                </motion.div>
                <motion.div variants={fadeInItem}>
                    <HistorySegments number={2}>Desde sus inicios, nuestra empresa ha mantenido un tamaño modesto y una estructura familiar, lo que ha facilitado la construcción de relaciones cercanas y de confianza, tanto con nuestro personal, ya sea de planta como embarcado, como con nuestros clientes. Esta conexión humana ha sido un pilar fundamental de nuestra trayectoria</HistorySegments>
                </motion.div>
                <motion.div variants={fadeInItem}>
                    <HistorySegments number={3}>Hoy en día, la empresa es liderada por descendientes de sus fundadores, quienes han heredado no solo la experiencia, sino también el compromiso de consolidar y expandir el legado familiar. Especializados en la extracción de arena mediantetécnicas de succión y navegación fluvial, hemos perfeccionado nuestras operaciones a lo largo de 72 años, estableciéndonos como un actor confiable y respetado en el sector</HistorySegments>
                </motion.div>
                <motion.div variants={fadeInItem}>
                    <HistorySegments number={4}>Nuestro recorrido es testimonio de la combinación de tradición e innovación, y de un firme compromiso con el servicio.
                    </HistorySegments>
                </motion.div>

            </motion.div>
        </section>
    )
}

export default History