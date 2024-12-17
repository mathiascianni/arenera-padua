import { Socials } from "../home"
import { Title } from "../ui"

const SocialsContainer = () => {
    return (
        <section className="mb-16 mt-16 lg:mt-32 text-center lg:text-start">
            <Title hierachy="h2">También podes <span className="text-primary">encontrarnos</span> acá</Title>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 mt-8">
                <div>
                    <p className="text-xl mb-4">Nuestras redes</p>
                    <Socials />
                </div>
                <div className="">
                    <p className="text-xl mb-4">Otros métodos de contacto</p>
                    <ul className='space-y-2 mb-2'>
                        <li><a href="https://wa.me/+5401136923474" target="_blank" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-secondary after:w-full after:scale-x-0 after:-bottom-1 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left">📞 011 3692 3474</a></li>
                        <li><a href="https://maps.app.goo.gl/2QY2JjF1h2juY8bB8" target="_blank" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-secondary after:w-full after:scale-x-0 after:-bottom-1 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left">📌 Acceso A Rafael Obligado, C1104 Cdad. Autónoma de Buenos Aires</a></li>
                        <li>✉️ arenerapadua@gmail.com</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SocialsContainer