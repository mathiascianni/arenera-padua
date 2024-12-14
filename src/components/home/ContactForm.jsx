import { motion } from "motion/react"
import { fadeInContainer, fadeInItem } from "../../api/animations"
import { Input, Textarea, Title } from "../ui"
import Socials from "./Socials"
import { useState } from "react"
import emailjs from "@emailjs/browser"

import Notification from "../ui/Notification";

const ContactForm = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [notification, setNotification] = useState({ visible: false, message: "", type: "success" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (response) => {
          console.log("El email se envió con éxito", response.status, response.text);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setNotification({
            visible: true,
            message: "El correo se envió correctamente",
            type: "success",
          });
          setTimeout(() => setNotification({ ...notification, visible: false }), 3000);
        },
        (err) => {
          console.error("El email no se envió", err);
          setNotification({
            visible: true,
            message: "Hubo un error al enviar el correo. Por favor, intenta nuevamente.",
            type: "error",
          });
          setTimeout(() => setNotification({ ...notification, visible: false }), 3000);
        }
      );
  };



  return (
    <section className="mb-16">
      <div className="bg-[url('/media/gallery/atardecer-en-deltarena.jpeg')] bg-cover bg-center h-[780px] flex flex-row-reverse xl:flex-row">
        <form onSubmit={handleSubmit} className="w-full max-w-[1255px] bg-white h-full ">

          <motion.div
            variants={fadeInContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="xl:px-4/12 h-full p-4 flex flex-col justify-center gap-4">
            <h2 className="uppercase text-small lg:text-6xl font-anton mb-4 lg:mb-12">Podes <span className="text-primary">contactarnos</span> acá</h2>
            <div className="w-full flex flex-col lg:flex-row gap-4 mb-4">
              <Input label="Nombre completo" type="text" id="name" icon="/icons/user.svg" value={name} onChange={(e) => setName(e.target.value)} />
              <Input label="Email" type="email" id="email" icon="/icons/mail.svg" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-4">
              <Input label="Asunto" type="text" id="subject" icon="/icons/text.svg" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
            <Textarea placeholder="Mensaje" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <div className="flex flex-col-reverse gap-4 lg:flex-row justify-end mt-2">
              <button type="submit" className="bg-primary text-white px-16 py-4 rounded-md font-anton  hover:bg-secondary transition-colors hover:text-dark">Enviar</button>
            </div>
          </motion.div>
        </form>
        <div className="w-full h-[780px] flex-1 hidden xl:block">
          <img src="/media/triangle-separator-horizontal.png" className="h-full" alt="" />
        </div>
      </div>
      {notification.visible && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification({ ...notification, visible: false })}
        />
      )}
    </section>
  )
}

export default ContactForm