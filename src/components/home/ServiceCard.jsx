import { motion } from "motion/react"
import { fadeInItem } from "../../api/animations"
export default function ServiceCard({ service, index }) {

    
    return (
        <motion.div
            className="border border-dark rounded-md pb-8"
            variants={fadeInItem}
        >
            <h3 className="text-center mb-4 text-xl sm:min-h-[90px] flex items-center justify-center xl:min-h-[90px] 2xl:min-h-[120px] bg-primary text-white line-clamp-3 px-4 rounded-t-sm py-4">{service.title}</h3>
            
            <figure>
                <img className="mx-auto mb-4" src={`/icons/${service.icon}`} alt='' />
            </figure>
            <p className="text-center px-8">{service.text}</p>
        </motion.div>
    )
}
