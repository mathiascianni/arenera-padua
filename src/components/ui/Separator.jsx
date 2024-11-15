import { motion } from "motion/react"
import { div } from "motion/react-client"

const Separator = ({ children, invert }) => {
    return (
        <div className="overflow-hidden my-8 xl:my-large">
            <motion.div 
                className={`text-[56px] xl:text-[197px] flex items-center gap-[64px] font-anton uppercase opacity-40 text-transparent font-outline-primary-2 ${invert ? "translate-x-[64px]" : "-translate-x-[64px]"}`}
                initial={{ x: invert ? 320 : -320 }}
                whileInView={{ x: invert ? 64 : -64 }}
                transition={{ duration: 1.4, type: "spring", bounce: 0.6 }}
                
                viewport={{ once: true }}    
            >
                {invert ? (
                    <>
                        <span>{children}</span>
                        <div className="h-[53px] xl:h-[175px] rounded-full bg-transparent border-2 border-primary w-[3000px] xl:-mr-24"></div>
                    </>
                ) : (
                    <>
                        <div className="h-[53px] xl:h-[175px] rounded-full bg-transparent border-2 border-primary w-[3000px] xl:-ml-24"></div>
                        <span>{children}</span>
                    </>
                )
                }
            </motion.div>
        </div>
    )
}

export default Separator