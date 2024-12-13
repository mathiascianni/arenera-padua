import { motion } from "motion/react"
import { fadeInContainer, fadeInItem } from "../../api/animations"
import { Input, Textarea, Title } from "../ui"
import Socials from "./Socials"
const ContactForm = () => {
  return (
    <section className="mb-16">
      <div className="bg-[url('./media/gallery/atardecer-en-deltarena.jpeg')] bg-cover bg-center h-[780px] flex flex-row-reverse xl:flex-row">
        <form action="#" className="w-full max-w-[1255px] bg-white h-full ">

          <motion.div
            variants={fadeInContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="xl:px-4/12 h-full p-4 flex flex-col justify-center gap-4">
            <motion.div
              variants={fadeInItem}>
              <Title hierachy="h2">Podes <span className="text-primary">contactarnos</span> acá</Title>
            </motion.div>
            <div className="w-full flex flex-col lg:flex-row gap-4 ">
              <Input label="Nombre completo" type="text" id="name" icon="/icons/user.svg" />
              <Input label="Email" type="email" id="email" icon="/icons/mail.svg" />
            </div>
            <Input label="Asunto" type="text" id="subject" icon="/icons/text.svg" />
            <Textarea placeholder="Mensaje" id="message" />
            <div className="flex flex-col-reverse gap-4 lg:flex-row justify-between">
              <Socials />
              <button type="submit" className="bg-primary text-white px-16 py-4 rounded-md font-anton  hover:bg-secondary transition-colors hover:text-dark">Enviar</button>
            </div>
          </motion.div>
        </form>
        <div className="w-full h-[780px] flex-1 hidden xl:block">
          <img src="/media/triangle-separator-horizontal.png" className="h-full" alt="" />
        </div>
      </div>
    </section>
  )
}

export default ContactForm