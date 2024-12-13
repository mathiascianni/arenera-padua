import { Header, ContactForm, SocialsContainer } from "../components/contact"

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <div className="px-4 xl:px-4/12">
          <ContactForm />
          <SocialsContainer />
        </div>
      </main>
    </>
  )
}
