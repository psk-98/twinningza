import { motion } from "framer-motion"
import { containerVariants } from "../../animations/routes"

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
export default PageWrapper
