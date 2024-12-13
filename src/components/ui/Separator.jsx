import { motion } from "motion/react"
import { div } from "motion/react-client"
import useIsMobile from "../../hooks/useIsMobile"

const Separator = ({ children, invert }) => {
    const isMobile = useIsMobile();

    return (
        <div className="overflow-hidden my-16 lg:my-24 xl:my-large select-none">
            <motion.div 
                className={`text-[48px] md:text-[64px] xl:text-[197px] flex items-center gap-4 xl:gap-[64px] font-anton uppercase opacity-40 text-transparent font-outline-primary-2 ${invert ? "translate-x-[64px]" : "-translate-x-[64px]"}`}
                initial={{ x: invert ? 320 : -320 }}
                whileInView={{ x: invert ? isMobile ? 16 : 64 : isMobile ? -16 : -64 }}
                transition={{ duration: 1.3 }}
                
                viewport={{ once: true }}    
            >
                {invert ? (
                    <>
                        <span>{children}</span>
                        <div className="h-[48px] md:h-[64px] xl:h-[175px] rounded-full bg-transparent border-2 border-primary w-[3000px] -mr-24"></div>
                    </>
                ) : (
                    <>
                        <div className="h-[48px] md:h-[64px] xl:h-[175px] rounded-full bg-transparent border-2 border-primary w-[3000px] -ml-24"></div>
                        <span>{children}</span>
                    </>
                )
                }
            </motion.div>
        </div>
    )
}

export default Separator