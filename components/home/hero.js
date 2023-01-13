import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { motion } from 'framer-motion'
import { btnVariants } from '../../animations/home'

export default function Hero() {
  return (
    <>
      <div
        className={styles.landing}
        style={{ backgroundImage: `url(hero.webp)` }}
      >
        <Link href="/products/all">
          <motion.div
            className={`${styles.shopBtn} btn`}
            variants={btnVariants}
            whileHover="hover"
          >
            Shop now
          </motion.div>
        </Link>
      </div>
      <div className={`${styles.about} contained`}>
        <p>
          Twinning ZA by MK is beachwear and accessory clothing brand, offering
          our customer trendy, stylish beachwear for men, women and kids.
          Finding perfect matching beachwear for your family trip, girls trips,
          beacation has just been made easy with our wide selection of styles
          and inclusive size range (XS - 4XL) women.
        </p>
      </div>
    </>
  )
}
