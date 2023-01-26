import Link from "next/link"
import styles from "../../styles/Home.module.css"
import { motion } from "framer-motion"
import { btnVariants } from "../../animations/home"
import { useRouter } from "next/router"
import Image from "next/image"

export default function Hero() {
  const router = useRouter()

  return (
    <>
      <div
        className={styles.landing}
        style={{ backgroundImage: `url(hero.jpg)` }}
      >
        <div className={`${styles.heroDesc} light`}>
          trendy and stylish beachwear for the whole family
        </div>
        <motion.div
          className={`${styles.shopBtn} light btn`}
          variants={btnVariants}
          whileHover="hover"
          onClick={() => router.push("/products/all")}
        >
          Shop now
        </motion.div>
      </div>
    </>
  )
}
