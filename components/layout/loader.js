import { motion } from 'framer-motion'
import { loaderVariants } from '../../animations/loader'

const Loader = ({ loading, children }) => {
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate="loading"
        exit={{ x: -100 }}
      >
        TwinningZA
      </motion.div>
    </>
  )
}

export default Loader
