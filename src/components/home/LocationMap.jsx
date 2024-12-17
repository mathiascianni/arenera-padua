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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.3043162723012!2d-58.3921955242158!3d-34.573368699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad316089e49%3A0xd243bcffb6701e2!2sArenera%20Padua!5e0!3m2!1ses-419!2sar!4v1734470837838!5m2!1ses-419!2sar"
                className="w-full aspect-video rounded-md"
                title="Ubicación de la tienda"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></motion.iframe>

        </section>
    )
}
