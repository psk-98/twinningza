import Nav from "../nav/Nav"
import Footer from "./Footer"
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const Layout = ({ children }) => {
  return (
    <div className={poppins.className}>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
