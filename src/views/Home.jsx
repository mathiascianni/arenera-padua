import { Video, Resume, Service, Galery, ShipSlider, LocationMap, ContactForm } from "../components/home/index"
import { Separator, Header } from "../components/ui"

export default function Home() {
    return (
        <>
            <Header />
            <main className="">
                <div className="px-4 xl:px-4/12">
                    <Video />
                    <Resume />
                </div>

                <Separator>Confianza</Separator>
                <div className="px-4 xl:px-4/12">
                    <Service />
                    <Galery />
                </div>
                <Separator invert>Compromiso</Separator>
                <div className="px-4 xl:px-4/12">
                    <ShipSlider />
                    <LocationMap />
                </div>
                <Separator>Esfuerzo</Separator>

                <ContactForm />

            </main>
        </>
    )
}
