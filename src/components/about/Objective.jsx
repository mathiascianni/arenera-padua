import { motion } from "motion/react"
import { fadeInContainer, fadeInItem } from "../../api/animations"
import { Title } from "../ui"
const Objective = () => {
  return (
    <section className="flex-1 bg-secondary p-8 xl:p-16 rounded-md text-dark">
      <motion.div
        variants={fadeInContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}

      >
        <motion.div variants={fadeInItem} >
        <Title hierachy={"h2"} >Nuestro <span className="text-primary">objetivo</span></Title>
        </motion.div>
        <motion.p variants={fadeInItem} className="text-base lg:text-xl mb-12">
          Aumentar nuestra capacidad operativa mejorando nuestras instalaciones y procesos
          para asegurar un suministro constante de arena fina, atendiendo las necesidades de
          nuestros clientes de manera eficiente y responsable.

        </motion.p>
      </motion.div>
    </section>
  )
}

export default Objective