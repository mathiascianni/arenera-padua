import { motion } from "motion/react"
import { fadeInContainer, fadeInItem } from "../../api/animations"
import { Title } from "../ui"
const Mission = () => {
  return (
    <section className="flex-1 bg-primary p-8 xl:p-16 rounded-md text-white">
      <motion.div
        variants={fadeInContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <motion.div variants={fadeInItem}>
          <Title hierachy={"h2"} center={false} >Nuestra <span className="text-secondary">misión</span></Title>
        </motion.div>
        <motion.p variants={fadeInItem} className="text-base lg:text-xl mb-12">
          Ser una empresa referente en la extracción, transporte y comercialización de arena fina, basada en una gestión responsable, un trato cercano y personalizado con nuestros clientes, y un compromiso constante con la calidad de nuestro servicio y la sostenibilidad ambiental.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Mission