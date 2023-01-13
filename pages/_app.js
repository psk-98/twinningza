import { WrappedBuildError } from 'next/dist/server/base-server'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import { wrapper } from '../store/store'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
