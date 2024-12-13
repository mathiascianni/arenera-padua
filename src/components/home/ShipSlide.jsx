import { SwiperSlide } from "swiper/react";

const ShipSlide = ({ ship, index }) => {
    return (
        <div className="p-4 flex flex-col lg:flex-row min-h-min items-stretch">
            <div className="lg:max-h-[580px] lg:flex-1 rounded-t-md lg:rounded-md overflow-hidden">
                <img 
                    src={`/media/${ship.img}`} 
                    alt={ship.alt} 
                    className="w-full h-full object-cover rounded-t-md lg:rounded-md" 
                />
            </div>

            <div className="lg:max-h-[580px] lg:max-w-[450px] lg:flex-1 w-full lg:-ml-4 z-10 rounded-b-md lg:rounded-md bg-white py-16 px-8 shadow-[0px_0px_20px_4px_rgba(0,0,0,0.25)] flex flex-col justify-between">
                <div className="space-y-4 mb-16">
                    <h3 className="text-2xl font-bold uppercase mb-4">
                        Embarcación <span className="text-primary">{ship.name}</span>
                    </h3>
                    <p className="mb-2">Tipo de embarcación: <span className="text-primary font-black">{ship.type}</span></p>
                    <p className="mb-2">Eslora: <span className="text-primary font-black">{ship.eslora}m</span></p>
                    <p className="mb-2">Manga: <span className="text-primary font-black">{ship.manga}m</span></p>
                    <p className="mb-2">Puntal: <span className="text-primary font-black">{ship.puntal}m</span></p>
                    <p className="mb-2">Calado: <span className="text-primary font-black">{ship.calado}ft</span></p>
                </div>
            </div>
        </div>
    );
}

export default ShipSlide;
