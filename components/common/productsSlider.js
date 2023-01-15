import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "../../styles/Home.module.css"
import { motion } from "framer-motion"
import { sliderCardVariants } from "../../animations/common"
import { backArrow, forwardArrow } from "../../public/svgs"

export default function Slider({ header, products }) {
  const [isEmpty, setEmpty] = useState(true)

  useEffect(() => {
    if (products && products.length === 0) setEmpty(true)
    else setEmpty(false)
  }, [products])

  return isEmpty ? (
    <></>
  ) : (
    <div className={styles.productSlider}>
      <div className={`${styles.sliderHeader} `}>
        <p className="header">{header}</p>
        <div className={styles.sliderControls}>
          {backArrow}
          {forwardArrow}
        </div>
      </div>
      <div className={styles.slider}>
        {products?.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className={styles.sliderCard}
            >
              <motion.div
                variants={sliderCardVariants}
                initial="initial"
                whileHover="hover"
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
            </Link>
          )
        })}
      </div>
    </div>
  )
}
