import { NavLink } from "react-router-dom"
const NotFound = () => {
    return (

        <main className="px-4 xl:px-4/12 min-h-screen flex flex-col justify-center items-center">
            <div>
                <div>
                    <h1 className="font-anton text-4xl mb-4"><span className="text-primary">¡Oops!</span> No encontramos lo que buscás…</h1>
                    <p className="text-lg mb-8">Parece que la ruta hacia esta página se ha perdido en la arena. No te preocupes, estamos acá para ayudarte a encontrar lo que necesitás.</p>
                    <h2 className="text-2xl font-anton mb-4">¿Qué podes hacer?</h2>
                    <ul className="list-disc list-inside flex flex-col gap-4">
                        <li>Podés volver a nuestra <NavLink to="/" className="text-primary hover:text-secondary transition-all font-bold">página principal</NavLink></li>
                        <li>Explorá nuestra <NavLink to="/galery" className="text-primary hover:text-secondary transition-all font-bold">galería</NavLink></li>
                        <li>O contactá con nosotros si tienes dudas o necesitas más información <NavLink to="/contact" className="text-primary hover:text-secondary transition-all font-bold">acá</NavLink></li>
                    </ul>
                </div>
            </div>
        </main>

    )
}

export default NotFound