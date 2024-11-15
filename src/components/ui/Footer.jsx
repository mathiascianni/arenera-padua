import { NavLink } from "react-router-dom"

export default function Footer() {
    return (
        <footer className='bg-primary pt-8'>
            <div className='mx-auto text-white text-center mb-4'>
                <NavLink to="/">
                    <img src="/media/arenera-padua-logo-full.png" alt="Logo" className="mx-auto mb-4" />
                </NavLink>
                <ul className='space-y-2 mb-2'>
                    <li>+54 11 9999 9999</li>
                    <li>Acceso A Rafael Obligado, C1104 Cdad. Autónoma de Buenos Aires</li>
                    <li>arenerapadua@gmail.com</li>
                </ul>
                <div>
                    Redes Sociales
                </div>
            </div>
            <div className="bg-dark text-dark-light text-center py-4">Castellani y Nocelli © 2024 - Todos los derechos reservados</div>
        </footer>
    )
}
