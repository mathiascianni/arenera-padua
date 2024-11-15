import Navbar from "./Navbar"
import { BannerTitle } from "../home"

export default function Header() {
  return (
    <header className="min-h-screen bg-[url('./media/header-image.jpg')] bg-cover bg-center px-4 xl:px-2/12">
      <Navbar />
      <BannerTitle />
    </header>
  )
}
