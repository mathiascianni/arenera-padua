import { NavLink } from "react-router-dom"
export default function Galery() {
  return (
    <section>
      <h2 className="uppercase text-small lg:text-large font-anton mb-12">
        Da un vistazo a la <span className='text-primary'>Galería</span>
      </h2>
      
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
        <div className='w-full h-[380px] rounded-md bg-primary'>1</div>
        <div className='w-full h-[380px] rounded-md bg-primary'>2</div>
        <div className='w-full h-[380px] rounded-md bg-primary'>3</div>
        <div className='w-full h-[380px] rounded-md bg-primary'>4</div>
      </div>
      
      <NavLink to="/galery" className='flex justify-end text-3xl'>
        Ver galería completa &rarr;
      </NavLink>
    </section>
  )
}
