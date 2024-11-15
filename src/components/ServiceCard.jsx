export default function ServiceCard({ service, index }) {
    return (
        <div key={index} className="border border-dark rounded-md p-8">
            <figure>
                <img className="mx-auto" src={`/icons/${service.icon}`} alt='' />
            </figure>
            <p className="text-center">{service.text}</p>
        </div>
    )
}
