import styles from "../../styles/Nav.module.css"
import { motion } from "framer-motion"
import {
  line1Variants,
  line2Variants,
  line3Variants,
  navVariants,
} from "../../animations/nav"
import { useState } from "react"
import Link from "next/link"
import { CartIcon, SearchIcon } from "../../public/svgs"
import { useRouter } from "next/router"
import Search from "./search"

export default function NavTop({
  show,
  toggle,
  setToggle,
  isSearch,
  setIsSearch,
}) {
  // const [isSearch, setIsSearch] = useState(false)
  const router = useRouter()

  return (
    <motion.div
      className={styles.navTop}
      style={{ display: router.route === "/checkout" ? "none" : "flex" }}
      variants={navVariants}
      animate={show ? "none" : "transparent"}
    >
      {console.log(router)}
      {isSearch ? (
        <Search setIsSearch={setIsSearch} />
      ) : (
        <>
          <motion.div
            className={styles.burger}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setToggle(!toggle)}
          >
            <motion.div
              className={styles.line}
              variants={line1Variants}
              animate={toggle ? "open" : "closed"}
            ></motion.div>
            <motion.div
              className={styles.line2}
              variants={line2Variants}
              animate={toggle ? "open" : "closed"}
            ></motion.div>
            <motion.div
              className={styles.line3}
              variants={line3Variants}
              animate={toggle ? "open" : "closed"}
            ></motion.div>
          </motion.div>

          <div className={styles.logo}>
            <Link href="/">Twinning ZA</Link>
          </div>

          <div className={styles.topNavList}>
            <Link href="/profile">P</Link>
            <motion.div
              className={styles.navItem}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearch(!isSearch)}
            >
              <SearchIcon />
            </motion.div>
            <Link href="/cart">
              <motion.div
                className={styles.navItem}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <CartIcon />
              </motion.div>
            </Link>
          </div>
        </>
      )}
    </motion.div>
  )
}
