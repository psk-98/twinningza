import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { imgVariants, selectorVariants } from "../../animations/product"
import { containerVariants } from "../../animations/routes"
import styles from "../../styles/Product.module.css"
import { isActive } from "./helper"

export default function Images({ product }) {
  const [currentImg, setCurrentImg] = useState(0)
  const [isLarger, setIsLarger] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 768) setIsLarger(true)
    else setIsLarger(false)
    console.log(isLarger)
  }, [window.innerWidth])

  return (
    <>
      <div className={styles.imgsWrapper}>
        <motion.div
          className={styles.imgWrapper}
          key={currentImg}
          variants={isLarger ? imgVariants : containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Image
            src={product?.product_images[currentImg].get_image}
            alt={currentImg}
            width="800"
            height="800"
          />
        </motion.div>
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
              >
                <Image
                  src={product?.product_images[index].get_image}
                  alt={currentImg}
                  width="800"
                  height="800"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </>
  )
}
