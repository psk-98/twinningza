import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "../../styles/Home.module.css"
import { motion } from "framer-motion"
import { sliderCardVariants } from "../../animations/common"
import { backArrow, forwardArrow } from "../../public/svgs"
import { useInView } from "react-intersection-observer"
import { useRouter } from "next/router"

export default function Slider({ header, products }) {
  const router = useRouter()
  const [isEmpty, setEmpty] = useState(true)
  const [ref, inView] = useInView({ threshold: 0.9 })

  useEffect(() => {
    if (products && products.length === 0) setEmpty(true)
    else setEmpty(false)
  }, [products])

  return isEmpty ? (
    <></>
  ) : (
    <motion.div
      className={styles.productSlider}
      initial={{ opacity: 0, y: 100 }}
      animate={
        inView && {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
          },
        }
      }
      ref={ref}
    >
      <div className={`${styles.sliderHeader} `}>
        <p className="header">{header}</p>
        <div className={styles.sliderControls}>
          {backArrow}
          {forwardArrow}
        </div>
      </div>
      <div className={styles.slider}>
        {products?.map((product, i) => {
          return (
            <motion.div
              className={styles.sliderCard}
              key={product.id}
              initial={{ opacity: 0, y: -100 }}
              whileHover="hover"
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.5 + i * 0.7 },
              }}
              onClick={() => {
                router.push(`/product/${product.slug}`)
              }}
            >
              <div className={styles.sliderImg}>
                <Image
                  src={product.product_images[0].get_image}
                  width="800"
                  height="800"
                  alt={product.name}
                />
              </div>
              <div className={styles.sliderName}>{product.name}</div>
              <Link href={`/products/${product.category}`}>
                <div className={`nav-text lighter`}>{product.category}</div>
              </Link>
              <div className={`nav-text`}>
                R {Math.round(product.price * 100) / 100}
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
