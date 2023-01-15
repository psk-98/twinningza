import Layout from "../components/layout/Layout"
import "../styles/globals.css"
import { wrapper } from "../store/store"
import { AnimatePresence, motion } from "framer-motion"
import { containerVariants } from "../animations/routes"

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          className="container"
          key={router.route}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
