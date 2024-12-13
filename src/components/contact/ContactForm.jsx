import { Input, Textarea } from "../ui/index"
import { useState } from "react"
import emailjs from "@emailjs/browser"


const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const serviceID = "service_arrdldp"
        const templateID = "template_phhw9yg"
        const publicKey = "ZrDMPO0W6VOvHZDCF"

        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        }

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log("El email se envio con exito", response.status, response.text);
                setName("")
                setEmail("")
                setSubject("")
                setMessage("")
            }, (err) => {
                console.error("El email no se envió", err);
            });
    }


    return (
        <form onSubmit={handleSubmit} className="mb-4 lg:mb-12">
            <h2 className="uppercase text-small lg:text-6xl font-anton mb-4 lg:mb-12">Escribinos <span className="text-primary">acá</span></h2>
            <div className="w-full flex flex-col lg:flex-row gap-4 mb-4">
                <Input label="Nombre completo" type="text" id="name" icon="/icons/user.svg" value={name} onChange={(e) => setName(e.target.value)} />
                <Input label="Email" type="email" id="email" icon="/icons/mail.svg" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-4">
                <Input label="Asunto" type="text" id="subject" icon="/icons/text.svg" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
            <Textarea placeholder="Mensaje" id="message"  value={message} onChange={(e) => setMessage(e.target.value)}/>
            <div className="flex flex-col-reverse gap-4 lg:flex-row justify-end mt-2">
                <button type="submit" className="bg-primary text-white px-16 py-4 rounded-md font-anton  hover:bg-secondary transition-colors hover:text-dark">Enviar</button>
            </div>
        </form>
    )
}

export default ContactForm