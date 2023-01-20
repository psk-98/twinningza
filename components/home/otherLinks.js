import Image from "next/image"
import styles from "../../styles/Home.module.css"
import { motion } from "framer-motion"
import Link from "next/link"
import { btnVariants } from "../../animations/home"
import { useState } from "react"
import { inViewVariants, sliderCardVariants } from "../../animations/common"
import { useRouter } from "next/router"
import { useInView } from "react-intersection-observer"

export default function OtherLinks() {
  const [womenHover, setWomenHover] = useState(false)
  const [menHover, setMenHover] = useState(false)
  const [kidsHover, setKidsHover] = useState(false)
  const router = useRouter()
  const [ref, inView] = useInView({ threshold: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 300 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      className={styles.linksWrapper}
      variants={container}
      initial="hidden"
      animate={inView && "show"}
    >
      <motion.div
        className={`${styles.linkWrapper} btn`}
        onMouseEnter={() => setWomenHover(true)}
        onMouseLeave={() => setWomenHover(false)}
        onClick={() => router.push("products/women")}
        variants={item}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className={styles.imgWrapper}
          animate={womenHover ? { opacity: 0.85 } : { opacity: 1 }}
        >
          <Image src={`/hero.webp`} width={800} height={800} alt="men" />
        </motion.div>
        <motion.div
          variants={btnVariants}
          animate={womenHover ? "hover" : "initial"}
          whileTap={{ scale: 0.95 }}
          className={`${styles.linkBtn} btn`}
        >
          Women
        </motion.div>
      </motion.div>

      <motion.div
        className={`${styles.linkWrapper} btn`}
        onMouseEnter={() => setKidsHover(true)}
        onMouseLeave={() => setKidsHover(false)}
        onClick={() => router.push("products/kids")}
        variants={item}
      >
        <motion.div
          className={styles.imgWrapper}
          animate={kidsHover ? { opacity: 0.85 } : { opacity: 1 }}
        >
          <Image src={`/hero.webp`} width={800} height={800} alt="men" />
        </motion.div>
        <motion.div
          variants={btnVariants}
          animate={kidsHover ? "hover" : "initial"}
          className={`${styles.linkBtn} btn`}
        >
          Kids
        </motion.div>
      </motion.div>
      <motion.div
        className={`${styles.linkWrapper} btn`}
        onMouseEnter={() => setMenHover(true)}
        onMouseLeave={() => setMenHover(false)}
        onClick={() => router.push("products/men")}
        variants={item}
      >
        <motion.div
          className={styles.imgWrapper}
          animate={menHover ? { opacity: 0.85 } : { opacity: 1 }}
        >
          <Image src={`/hero.webp`} width={800} height={800} alt="men" />
        </motion.div>
        <motion.div
          variants={btnVariants}
          animate={menHover ? "hover" : "initial"}
          className={`${styles.linkBtn} btn`}
        >
          Men
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
