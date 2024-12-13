import { Header, History, Mission, Vision, Values, Objective } from "../components/about"

export default function About() {
  return (
    <>
      <Header />
      <main>
        <div className="px-4 xl:px-4/12">
          <History />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-16 my-8">
            <Mission />
            <Vision />
            <Objective/>
            <Values />
          </div>
          

        </div>
      </main>
    </>
  )
}
