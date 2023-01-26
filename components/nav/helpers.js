import { useAnimation } from "framer-motion"
import {
  line1Variants,
  line2Variants,
  line3Variants,
  navVariants,
} from "../../animations/nav"

export const handleBurger = (
  line1Controls,
  line2Controls,
  line3Controls,
  toggle,
  setToggle,
) => {
  setToggle(!toggle)
  if (!toggle) {
    line1Controls.start(line1Variants.open)
    line2Controls.start(line2Variants.open)
    line3Controls.start(line3Variants.open)
  } else {
    line1Controls.start(line1Variants.closed)
    line2Controls.start(line2Variants.closed)
    line3Controls.start(line3Variants.closed)
  }
}

//transperant nab
export const handleNav = (lastScrollY, navControls, setLastScrollY) => {
  if (window.scrollY > lastScrollY) {
    navControls.start(navVariants.transparent)
  } else {
    navControls.start(navVariants.none)
  }

  // remember current page location to use in the next move
  setLastScrollY(window.scrollY)
}

//icons
