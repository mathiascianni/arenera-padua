import { BannerTitle } from "../home"

export default function Header() {
  return (
    <header className="min-h-screen bg-[url('/media/home-header.jpg')] bg-cover bg-center px-4 xl:px-2/12">
      <BannerTitle />
    </header>
  )
}
