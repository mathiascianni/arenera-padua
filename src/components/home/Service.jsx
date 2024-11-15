import { services } from "../../api/service"
import ServiceCard from "../ServiceCard"
export default function Service() {
    return (
        <section id="services" className="mb-40">
            <h2 className="uppercase text-small lg:text-large font-anton text-center mb-12">¿Qué <span className="text-primary">servicios</span> ofrecemos?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((service, index) => (
                    <ServiceCard index={index} service={service} />
                ))}
            </div>
        </section>
    )
}
