import { motion } from "framer-motion"
import { fadeInContainer, fadeInItem } from "../../api/animations"
import { Title } from "../ui"
const Values = () => {
    const values = [
        {
            title: "Trato Personalizado",
            value: "Cada cliente es único; nos esforzamos por ofrecer soluciones adaptadas a sus necesidades."
        },
        {
            title: "Responsabilidad Ambiental",
            value: "Actuamos con conciencia hacia el entorno natural, implementando prácticas sostenibles en todas nuestras operaciones."
        },
        {
            title: "Crecimiento y Mejora Continua",
            value: "Trabajamos para mejorar constantemente nuestra infraestructura, procesos y alcance."
        },
        {
            title: "Confiabilidad",
            value: "Nuestro objetivo es ser un socio confiable para nuestros clientes, garantizando puntualidad y calidad en cada servicio."
        },
    ]

    return (
        <section className="flex-1 bg-primary p-8 xl:p-16 rounded-md text-white">
            <motion.div
                variants={fadeInContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}

            >
                <motion.div variants={fadeInItem} >
                <Title hierachy={"div"} >Nuestros <span className="text-secondary">valores</span></Title>
                </motion.div>
                <ul className="list-disc pl-4 text-lg">
                    {values.map((value, index) => (
                        <motion.li className="mb-4" key={index} variants={fadeInItem}>
                            <span className="font-bold text-secondary uppercase">{value.title}:</span> {value.value}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </section>

    )
}

export default Values