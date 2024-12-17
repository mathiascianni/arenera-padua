import { NavLink } from "react-router-dom"
import { socials } from "../../api/socials"

export default function Footer() {
    return (
        <footer className='bg-primary pt-8'>
            <div className='mx-auto text-white text-center mb-4'>
                <NavLink to="/">
                    <img src="/media/arenera-padua-logo-full.png" alt="Logo" className="mx-auto mb-4" />
                </NavLink>
                <ul className='space-y-2 mb-2'>
                    <li><a href="https://wa.me/+5401136923474" target="_blank">📞 011 3692 3474</a></li>
                    <li><a href="https://maps.app.goo.gl/2QY2JjF1h2juY8bB8" target="_blank">📌 Acceso A Rafael Obligado, C1104 Cdad. Autónoma de Buenos Aires</a></li>
                    <li>✉️ arenerapadua@yahoo.com.ar</li>
                </ul>
                <ul className="flex justify-center space-x-4">
                   {
                       socials.map((social, index) => (<li key={index}><a href={social.url} target="_blank"><img src={`/icons/${social.icon}`} alt="" className="hover:scale-110 hover:-rotate-6 transition-all max-w-8 invert" /></a></li>))
                   } 
                </ul>
            </div>
            <div className="bg-dark text-dark-light text-center py-4">Castellani y Nocelli SRL © 2024 - Todos los derechos reservados</div>
        </footer>
    )
}
