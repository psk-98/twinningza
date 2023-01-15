import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/Products.module.css"
import { motion } from "framer-motion"

export default function ProductCards({ products }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.productCards}>
        {products?.map((product) => {
          return (
            <motion.div
              className={styles.productCard}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Link href={`/product/${product.slug}`}>
                <div className={styles.imgWrapper}>
                  <Image
                    width={800}
                    height={800}
                    src={product.product_images[0].get_image}
                    alt={product.name}
                  />
                </div>
                <div className={styles.name}>{product.name}</div>
                <div className={`nav-text lighter`}>{product.category}</div>
                <div className={`nav-text`}>R {product.price.toFixed(2)}</div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
