import styles from "../../styles/Nav.module.css"
import { motion } from "framer-motion"
import {
  navLinkVariants,
  sidebarVariants,
  ulVariants,
} from "../../animations/nav"
import { useRouter } from "next/router"

export default function SideBar({ toggle, handleBurger }) {
  const router = useRouter()

  return (
    <motion.div
      initial={false}
      className={styles.sideBar}
      animate={toggle ? "open" : "closed"}
      variants={sidebarVariants}
    >
      <motion.ul className={styles.sideList} variants={ulVariants}>
        <motion.li
          className={styles.sideItem}
          key={1}
          variants={navLinkVariants}
          //whileHover="hover"
          //whileTap="tap"
          onClick={() => {
            handleBurger()
            router.push("/products/women")
          }}
        >
          Women
        </motion.li>
        <motion.li
          className={styles.sideItem}
          key={2}
          variants={navLinkVariants}
          //whileHover="hover"
          //whileTap="tap"
          onClick={() => {
            handleBurger()
            router.push("/products/kids")
          }}
        >
          Kids
        </motion.li>
        <motion.li
          className={styles.sideItem}
          key={3}
          variants={navLinkVariants}
          //whileHover="hover"
          //whileTap="tap"
          onClick={() => {
            handleBurger()
            router.push("/products/men")
          }}
        >
          men
        </motion.li>
        <motion.li
          className={styles.sideItem}
          key={4}
          variants={navLinkVariants}
          //whileHover="hover"
          //whileTap="tap"
          onClick={() => {
            handleBurger()
            router.push("/products/men")
          }}
        >
          about us
        </motion.li>
        <motion.li
          className={styles.sideItem}
          key={5}
          variants={navLinkVariants}
          //whileHover="hover"
          //whileTap="tap"
          onClick={() => {
            handleBurger()
            router.push("/products/men")
          }}
        >
          contact us
        </motion.li>
        <motion.li
          className={styles.sideItem}
          key={6}
          variants={navLinkVariants}
          //whileHover="hover"
          //whileTap="tap"
          onClick={() => {
            handleBurger()
            router.push("/login")
          }}
        >
          login
        </motion.li>
        <motion.li
          className={styles.sideItem}
          key={7}
          variants={navLinkVariants}
          //whileHover="hover"
          //whileTap="tap"
          onClick={() => {
            handleBurger()
            router.push("/register")
          }}
        >
          register
        </motion.li>
      </motion.ul>
    </motion.div>
  )
}
