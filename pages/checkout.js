import { useState } from "react"
import { useSelector } from "react-redux"
import Payment from "../components/checkout/payment"
import Shipping from "../components/checkout/shippingInfo"
import PageWrapper from "../components/layout/PageWrapper"
//import styles from "../styles/Checkout.module.css"
import styles from "../styles/Checkout.module.css"

export default function Checkout() {
  const [isShip, setIsShip] = useState(false)
  const [isPay, setIsPay] = useState(false)
  const state = useSelector((state) => state)
  const { checkout } = state
  return isShip ? (
    <PageWrapper key={isShip}>
      <Shipping setIsPay={setIsPay} setIsShip={setIsShip} />
    </PageWrapper>
  ) : isPay ? (
    <PageWrapper key={isPay}>
      <Payment />
    </PageWrapper>
  ) : checkout?.orderSucess ? (
    <PageWrapper key={checkout?.orderSucess}>
      <div className="contained">
        <div className={styles.thankMsg}>
          Thank you for your purchase, {checkout?.deliveryA.name}! We've sent
          you a confirmation email.
        </div>
      </div>
    </PageWrapper>
  ) : (
    <></>
  )
}
