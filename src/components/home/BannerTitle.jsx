const BannerTitle = () => {
    return (
        <div className="min-h-screen gap-6 flex flex-col justify-center text-large lg:text-extra-large">
            <div className="leading-none font-anton uppercase">
                <p className="text-transparent font-outline-1 lg:font-outline-2">Somos</p>
                <h1 className="text-secondary">Arenera Padua</h1>
            </div>
            <p className="font-light text-lg xl:text-2xl text-white ">Extracción y comercialización de arena fina</p>
            <a href="#services" className="font-light text-lg xl:text-2xl text-white bg-primary px-4 py-2 xl:py-4 xl:px-8 inline-block max-w-max rounded-md transition-all duration-500 hover:bg-secondary hover:text-dark">Explorá nuestros servicios &rarr;</a>
        </div>
    )
}

export default BannerTitle