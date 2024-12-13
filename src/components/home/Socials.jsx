import { socials } from "../../api/socials"
const Socials = () => {
    return (
        <div className="flex gap-4 w-full lg:justify-start justify-center">
            {
                socials.map(social => (
                    <a href={social.url} key={social.id} target="_blank"><span className="sr-only">{social.url}</span><img src={`/icons/${social.icon}`} alt="" className="hover:scale-110 hover:-rotate-6 transition-all" /></a>))
            }
        </div>
    )
}

export default Socials