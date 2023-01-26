import styles from "../../styles/Nav.module.css"
import { motion } from "framer-motion"
import {
  navLinkVariants,
  sidebarVariants,
  ulVariants,
} from "../../animations/nav"
import { useRouter } from "next/router"
import Link from "next/link"

export default function SideBar({ toggle, sideBarControls }) {
  return (
    <motion.div
      className={styles.sideBar}
      variants={sidebarVariants}
      initial={false}
      animate={toggle ? "open" : "closed"}
    >
      {navItems.map((item, index) => {
        return (
          <motion.div
            className={styles.sideItem}
            key={index}
            variants={navLinkVariants}
          >
            <Link href={item.link}>{item.name}</Link>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

const navItems = [
  {
    name: "Shop Women",
    link: "/products/women",
  },
  {
    name: "Shop Kids",
    link: "/products/kids",
  },
  {
    name: "Shop Men",
    link: "/products/men",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
]
