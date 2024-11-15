import { Video, Resume, Service, Galery, ShipSlider, LocationMap } from "../components/home/index"
import { Separator, Header } from "../components/ui"

export default function Home() {
    return (
        <>  
            <Header />
            <main className="">
                <div className="mycontainer">
                    <Video />
                    <Resume />
                </div>

                <Separator>Confianza</Separator>
                <div className="mycontainer">
                    <Service />
                    <Galery />
                </div>
                <Separator invert>Compromiso</Separator>
                <div className="mycontainer">
                    <ShipSlider />
                    <LocationMap />
                </div>
                <Separator>Respondabilidad</Separator>
            </main>
        </>
    )
}
