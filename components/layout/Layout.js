import Nav from '../nav/Nav'
import Footer from './Footer'
// import Footer from "./Footer"
import { AnimatePresence, motion } from 'framer-motion'
import { containerVariants } from '../../animations/routes'
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
export default Layout
