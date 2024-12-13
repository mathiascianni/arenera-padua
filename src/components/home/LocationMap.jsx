import { motion } from "motion/react"
import { fadeInContainer, fadeInItem } from "../../api/animations"
import { Title } from "../ui"

export default function LocationMap() {
    return (
        <section>
            <motion.div variants={fadeInContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.div variants={fadeInItem} className="uppercase text-small lg:text-large font-anton mb-8">
                    <Title hierachy="h2">¿<span className="text-primary">Dónde</span> estamos?</Title>
                </motion.div>
                <motion.p variants={fadeInItem} className="text-base lg:text-2xl mb-12">
                    Nos podes encontrar en Acceso A Rafael Obligado, C1104 Cdad. Autónoma de Buenos Aires
                </motion.p>
            </motion.div>
            <motion.iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1161.5013779220524!2d-58.39110376345604!3d-34.57324880596585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb577555570f3%3A0x7544eff06337deb!2sPaseo%20Areneras!5e0!3m2!1ses!2sar!4v1731694723951!5m2!1ses!2sar&z=15"
                className="w-full aspect-video rounded-md"
                title="Ubicación de la tienda"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></motion.iframe>
        </section>
    )
}
