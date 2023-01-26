import { motion } from "framer-motion"
import { svgVariants, pathVariants } from "../animations/common"

export function SearchIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      width="17"
      height="17"
      fill="none"
      viewBox="0 0 17 17"
    >
      <motion.path
        variants={pathVariants}
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 16l-2.98-3.153a6.992 6.992 0 10-11.732-6.84 6.992 6.992 0 008.864 8.633"
      ></motion.path>
    </motion.svg>
  )
}
export function CartIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      width="14"
      height="17"
      fill="none"
      viewBox="0 0 14 17"
    >
      <motion.path
        variants={pathVariants}
        stroke="#000"
        d="M11 16H1V3.679h12v10.178M4.5 3.143V2.07v0C4.5 1.48 4.98 1 5.571 1H8v0a1 1 0 011 1v1.143"
      ></motion.path>
    </motion.svg>
  )
}

export const backArrow = (
  <svg
    width={23}
    height={26}
    viewBox="0 0 23 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 25.1244L1 13L22 0.875643V25.1244Z" stroke="black" />
  </svg>
)

export const forwardArrow = (
  <svg
    width={23}
    height={26}
    viewBox="0 0 23 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 0.875644L22 13L1 25.1244V0.875644Z" stroke="black" />
  </svg>
)

export const sortFilter = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-filter"
    stroke="7a7a7a"
    viewBox="0 11 20 20"
  >
    <line x1="16.5" y1="17.5" x2="3.5" y2="17.5" strokeLinecap="round" />
    <line x1="16.5" y1="24.5" x2="3.5" y2="24.5" strokeLinecap="round" />
    <circle cx={13} cy="24.5" r={2} fill="white" />
    <circle cx={7} cy="17.5" r={2} fill="white" />
  </svg>
)
export const close = (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    height="21"
    viewBox="0 0 48 48"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => setShowModal(false)}
  >
    <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
  </motion.svg>
)
export const yocoLogo = (
  <motion.svg
    variants={svgVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    width={46}
    height={20}
    viewBox="0 0 46 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.g variants={pathVariants} clipPath="url(#clip0_395_35)">
      <motion.path
        variants={pathVariants}
        d="M10 0H35.5066C41.0273 0 45.5066 4.47939 45.5066 10C45.5066 15.5206 41.0273 20 35.5066 20H10C4.47939 20 0 15.5276 0 10C0 4.47939 4.47939 0 10 0Z"
        fill="#00A9E0"
      />
      <motion.path
        variants={pathVariants}
        d="M9.21036 11.4675L6.17053 6.478H9.07759L10.5171 9.01468H10.608L12.0545 6.47101H14.8987L11.8589 11.4675V13.564H9.20338L9.21036 11.4675Z"
        fill="white"
      />
      <motion.path
        variants={pathVariants}
        d="M14.13 10.021C14.13 7.65198 15.7512 6.21243 18.3229 6.21243C20.8945 6.21243 22.5157 7.65198 22.5157 10.021C22.5157 12.3899 20.8945 13.8295 18.3229 13.8295C15.7512 13.8295 14.13 12.3899 14.13 10.021ZM19.9301 10.021C19.9301 8.97973 19.3222 8.37875 18.3229 8.37875C17.3236 8.37875 16.7226 8.97973 16.7226 10.021C16.7226 11.0622 17.3236 11.6632 18.3229 11.6632C19.3222 11.6632 19.9301 11.0622 19.9301 10.021Z"
        fill="white"
      />
      <motion.path
        variants={pathVariants}
        d="M22.942 10.0419C22.942 7.67295 24.6331 6.27533 27.1349 6.27533C28.3578 6.27533 29.2243 6.56883 29.9022 6.95318V9.34311H29.8812C29.0496 8.78406 28.3299 8.46261 27.4424 8.46261C26.3662 8.46261 25.5975 9.02166 25.5975 10.021C25.5975 11.0552 26.3872 11.5723 27.4284 11.5723C28.3508 11.5723 29.0916 11.2579 29.8812 10.6778H29.9022V13.0957C29.3431 13.4172 28.3648 13.7666 27.1139 13.7666C24.5283 13.7666 22.942 12.4109 22.942 10.0419Z"
        fill="white"
      />
      <motion.path
        variants={pathVariants}
        d="M30.3424 10.021C30.3424 7.65198 31.9637 6.21243 34.5353 6.21243C37.1069 6.21243 38.7282 7.65198 38.7282 10.021C38.7282 12.3899 37.1069 13.8295 34.5353 13.8295C31.9637 13.8295 30.3424 12.3899 30.3424 10.021ZM36.1425 10.021C36.1425 8.97973 35.5346 8.37875 34.5353 8.37875C33.536 8.37875 32.935 8.97973 32.935 10.021C32.935 11.0622 33.529 11.6632 34.5353 11.6632C35.5416 11.6632 36.1425 11.0622 36.1425 10.021Z"
        fill="white"
      />
    </motion.g>
    <motion.defs variants={pathVariants}>
      <clipPath id="clip0_395_35">
        <motion.rect
          variants={pathVariants}
          width="45.5136"
          height={20}
          fill="white"
        />
      </clipPath>
    </motion.defs>
  </motion.svg>
)
