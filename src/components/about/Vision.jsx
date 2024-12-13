import { motion } from "motion/react"
import { fadeInContainer, fadeInItem } from "../../api/animations"
import { Title } from "../ui"
const Vision = () => {
    return (
        <section className="flex-1 bg-secondary p-8 xl:p-16 rounded-md text-dark selection:bg-primary">
            <motion.div
                variants={fadeInContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}

            >
                <motion.div variants={fadeInItem}>
                    <Title hierachy={"h2"} >Nuestra <span className="text-primary">visión</span></Title>
                </motion.div>
                <motion.p variants={fadeInItem} className="text-base lg:text-xl mb-12">
                    Consolidarnos como una empresa líder en el mercado arenero, fortaleciendo nuestra infraestructura y logística para garantizar un suministro eficiente y confiable. Aspiramos a expandir nuestro alcance, atraer nuevos clientes y mantener relaciones basadas en la confianza y la satisfacción mutua.
                </motion.p>
            </motion.div>
        </section>
    )
}

export default Vision