import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { imgVariants, selectorVariants } from "../../animations/product"
import styles from "../../styles/Product.module.css"
import { isActive } from "./helper"

export default function Images({ product }) {
  const [currentImg, setCurrentImg] = useState(0)

  return (
    <>
      <div className={styles.imgsWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            className={styles.imgWrapper}
            key={currentImg}
            variants={imgVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Image
              src={product?.product_images[currentImg].get_image}
              alt={currentImg}
              width="800"
              height="800"
              placeholder="blur"
              blurDataURL="yoco.webp"
            />
          </motion.div>
        </AnimatePresence>
        <div className={styles.selectorWrapperSm}>
          {product?.product_images.map((selector, index) => {
            return (
              <motion.div
                className={styles.imgSelector}
                key={index}
                initial={false}
                animate={isActive(index, currentImg) ? "active" : "not"}
                variants={selectorVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentImg(index)}
              ></motion.div>
            )
          })}
        </div>
        <div className={styles.selectorWrapperLg}>
          {product?.product_images.map((selector, index) => {
            return (
              <motion.div
                className={styles.imgSelector}
                key={index}
                onClick={() => setCurrentImg(index)}
                animate={
                  isActive(index, currentImg)
                    ? {
                        opacity: 0.4,
                        border: "1px solid #000",
                        borderRadius: 0,
                      }
                    : { opacity: 1, border: "none" }
                }
                transition={{ type: "spring" }}
              >
                <Image
                  src={product?.product_images[index].get_image}
                  alt={currentImg}
                  width="800"
                  height="800"
                  placeholder="blur"
                  blurDataURL="data:yoco.webp"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </>
  )
}
