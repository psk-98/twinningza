import navStyles from "../../styles/Nav.module.css"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useViewportScroll,
} from "framer-motion"
import {
  line1Variants,
  line2Variants,
  line3Variants,
  navVariants,
  sidebarVariants,
} from "../../animations/nav"
import { useEffect, useState } from "react"
import { CartIcon, handleBurger, SearchIcon } from "./helpers"
import Link from "next/link"
import Search from "./search"
import SideBar from "./Side"
import NavTop from "./Top"

export default function Nav() {
  const [toggle, setToggle] = useState(false)
  const [isSearch, setIsSearch] = useState(false)

  const { scrollYProgress } = useViewportScroll()

  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false)
      } else {
        // if scroll up show the navbar
        setShow(true)
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <>
      <NavTop
        show={show}
        toggle={toggle}
        setToggle={setToggle}
        isSearch={isSearch}
        setIsSearch={setIsSearch}
      />
      <SideBar toggle={toggle} />
    </>
  )
}
