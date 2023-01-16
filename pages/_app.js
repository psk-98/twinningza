import Layout from "../components/layout/Layout"
import "../styles/globals.css"
import { wrapper } from "../store/store"
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
