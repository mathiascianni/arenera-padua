import { Footer, Navbar, WhatsappButton } from '../components/ui/index'
export default function Layout({ children }) {
    return (
        <>

            <Navbar />
            {children}
            <WhatsappButton />
            <Footer />
        </>
    )
}
