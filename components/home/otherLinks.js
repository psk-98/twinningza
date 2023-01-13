import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { btnVariants } from '../../animations/home'
import { useState } from 'react'
import { sliderCardVariants } from '../../animations/common'
export default function OtherLinks() {
  const [womenHover, setWomenHover] = useState(false)
  const [menHover, setMenHover] = useState(false)
  const [kidsHover, setKidsHover] = useState(false)

  return (
    <>
      <Link href="products/women">
        <div
          className={`${styles.linkWrapper} btn`}
          onMouseEnter={() => setWomenHover(true)}
          onMouseLeave={() => setWomenHover(false)}
        >
          <motion.div
            className={styles.imgWrapper}
            variants={sliderCardVariants}
            animate={womenHover ? 'hover' : 'initial'}
          >
            <Image src={`/hero.webp`} width={800} height={800} alt="men" />
          </motion.div>
          <motion.div
            variants={btnVariants}
            animate={womenHover ? 'hover' : 'initial'}
            whileTap={{ scale: 0.95 }}
            className={`${styles.linkBtn} btn`}
          >
            Women
          </motion.div>
        </div>
      </Link>
      <Link href="products/kids">
        <div
          className={`${styles.linkWrapper} btn`}
          onMouseEnter={() => setKidsHover(true)}
          onMouseLeave={() => setKidsHover(false)}
        >
          <motion.div
            className={styles.imgWrapper}
            variants={sliderCardVariants}
            animate={kidsHover ? 'hover' : 'initial'}
          >
            <Image src={`/hero.webp`} width={800} height={800} alt="men" />
          </motion.div>
          <motion.div
            variants={btnVariants}
            animate={kidsHover ? 'hover' : 'initial'}
            className={`${styles.linkBtn} btn`}
          >
            Kids
          </motion.div>
        </div>
      </Link>
      <Link href="products/men">
        <div
          className={`${styles.linkWrapper} btn`}
          onMouseEnter={() => setMenHover(true)}
          onMouseLeave={() => setMenHover(false)}
        >
          <motion.div
            className={styles.imgWrapper}
            variants={sliderCardVariants}
            animate={menHover ? 'hover' : 'initial'}
          >
            <Image src={`/hero.webp`} width={800} height={800} alt="men" />
          </motion.div>
          <motion.div
            variants={btnVariants}
            animate={menHover ? 'hover' : 'initial'}
            className={`${styles.linkBtn} btn`}
          >
            Men
          </motion.div>
        </div>
      </Link>
    </>
  )
}
