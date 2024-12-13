import { NavLink } from "react-router-dom"

export default function Footer() {
    return (
        <footer className='bg-primary pt-8'>
            <div className='mx-auto text-white text-center mb-4'>
                <NavLink to="/">
                    <img src="/media/arenera-padua-logo-full.png" alt="Logo" className="mx-auto mb-4" />
                </NavLink>
                <ul className='space-y-2 mb-2'>
                    <li><a href="https://wa.me/01136923474" target="_blank">📞 011 3692 3474</a></li>
                    <li><a href="https://maps.app.goo.gl/2QY2JjF1h2juY8bB8" target="_blank">📌 Acceso A Rafael Obligado, C1104 Cdad. Autónoma de Buenos Aires</a></li>
                    <li>✉️ arenerapadua@yahoo.com.ar</li>
                </ul>
                <div>
                    Redes Sociales
                </div>
            </div>
            <div className="bg-dark text-dark-light text-center py-4">Castellani y Nocelli © 2024 - Todos los derechos reservados</div>
        </footer>
    )
}
