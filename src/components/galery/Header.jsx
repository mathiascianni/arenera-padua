import { motion } from "framer-motion"

const Header = () => {
  return (
    <header className="min-h-screen bg-[url('/media/gallery-header.jpg')] bg-cover bg-center px-4 xl:px-2/12">
      <motion.div
        className="min-h-screen gap-6 flex flex-col justify-center text-large lg:text-[80px] 2xl:text-extra-large"
        initial={{ y: 50, opacity: 0, filter: "blur(4px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0)" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="leading-none font-anton uppercase">
          <motion.p
            className="text-transparent font-outline-1 lg:font-outline-2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Explora nuestra
          </motion.p>
          <motion.h1
            className="text-secondary text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Colección Visual
          </motion.h1>
          <div className="text-center font-light text-lg xl:text-4xl mb-8 text-white border-2 aspect-square w-16 mt-16 animate-bounce mx-auto rounded-full flex items-center justify-center">&darr;</div>
        </div>
      </motion.div>
    </header>
  )
}

export default Header
