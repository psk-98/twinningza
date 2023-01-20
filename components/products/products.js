import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/Products.module.css"
import { delay, motion } from "framer-motion"

export default function ProductCards({ products }) {
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
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  }
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.productCards}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {products?.map((product) => {
          return (
            <motion.div
              className={styles.productCard}
              variants={item}
              key={product.id}
            >
              <Link href={`/product/${product.slug}`}>
                <div className={styles.imgWrapper}>
                  <Image
                    width={800}
                    height={800}
                    src={product.product_images[0].get_image}
                    alt={product.name}
                    placeholder="blur"
                    blurDataURL="yoco.webp"
                  />
                </div>
                <div className={styles.name}>{product.name}</div>
                <div className={`nav-text lighter`}>{product.category}</div>
                <div className={`nav-text`}>R {product.price.toFixed(2)}</div>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
