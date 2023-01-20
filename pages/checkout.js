import { useState } from "react"
import Payment from "../components/checkout/payment"
import Shipping from "../components/checkout/shippingInfo"
import PageWrapper from "../components/layout/PageWrapper"

export default function Checkout() {
  const [isShip, setIsShip] = useState(false)
  const [isPay, setIsPay] = useState(true)

  return isShip ? (
    <PageWrapper key={isShip}>
      <Shipping setIsPay={setIsPay} setIsShip={setIsShip} />
    </PageWrapper>
  ) : isPay ? (
    <PageWrapper key={isPay}>
      <Payment />
    </PageWrapper>
  ) : (
    <></>
  )
}
