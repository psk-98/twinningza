import { useState } from "react"
import { useSelector } from "react-redux"
import PageWrapper from "../components/layout/PageWrapper"
import styles from "../styles/Cart.module.css"
import Modal from "../components/cart/modal"
import CartList from "../components/cart/cartList"

export default function Cart() {
  const [showModal, setShowModal] = useState(false)

  return showModal ? (
    <PageWrapper key={showModal}>
      <Modal />
    </PageWrapper>
  ) : (
    <PageWrapper key={showModal}>
      <CartList setShowModal={setShowModal} />
    </PageWrapper>
  )
}
