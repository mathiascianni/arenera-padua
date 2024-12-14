import { services } from "../../api/service"
import ServiceCard from "./ServiceCard"
import { motion } from "motion/react"
import { fadeInContainer, fadeInItem } from "../../api/animations"
import { Title } from "../ui"
export default function Service() {

    return (
        <section id="process" className="mb-40">
            <motion.div
                variants={fadeInItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <Title hierachy="h2">El <span className="text-primary">proceso</span></Title>
            </motion.div>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4"
                initial="hidden"
                whileInView="visible"
                variants={fadeInContainer}
                viewport={{ once: true }}
            >
                {services.map((service, index) => (
                    <ServiceCard key={index} index={index} service={service} />
                ))}
            </motion.div>
        </section>
    )
}
