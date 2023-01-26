import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import useScript from "react-script-hook/lib/use-script"
import { placeOrder } from "../../actions/checkout"
import { yocoLogo } from "../../public/svgs"
import styles from "../../styles/Checkout.module.css"
import { handleTotalPrice } from "../cart/helpers"

export default function Payment() {
  const state = useSelector((state) => state)
  const { numberCart, cart } = state.cart
  const { deliveryA } = state.checkout

  const dispatch = useDispatch()

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://js.yoco.com/sdk/v1/yoco-sdk-web.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const yoco = new window.YocoSDK({
        publicKey: "pk_test_ed3c54a6gOol69qa7f45",
      })
      const checkoutButton = document.querySelector("#checkout-button")
      checkoutButton.addEventListener("click", () => {
        yoco.showPopup({
          amountInCents: (parseFloat(handleTotalPrice(cart)) * 100).toString(),
          currency: "ZAR",
          callback: (result) => {
            if (result.error) {
              const errorMessage = result.error.message
              alert(`error occured: ${errorMessage}`)
            } else {
              alert(`card successfully tokenised: ${result.id}`)
              dispatch(placeOrder(result.id))
            }
          },
        })
      })
    }
  }, [])

  const handlePriceDetails = (product) => {
    if (product.quantity > 1) {
      return (
        <>
          <div className={styles.priceQuantity}>
            {product.quantity} X R{product.price.toFixed(2)}
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className={styles.itemTotalPrice}>
            R{(product.price * product.quantity).toFixed(2)}
          </div>
        </>
      )
    }
  }

  return (
    <div className="contained">
      <div className="checkoutProcess">
        <div className="header">Payment</div>
        <div className="header">3/3</div>
      </div>
      <div className={styles.summaryWrapper}>
        {cart.map((product, i) => {
          return (
            <div className={styles.cartItem} key={i}>
              <div>{product.name}</div>
              <div>{product.size}</div>
              <div>{handlePriceDetails(product)}</div>
            </div>
          )
        })}
      </div>
      <div className={styles.totalPrice}>
        <div>Total inc tax and delivery</div>
        <div>R {handleTotalPrice(cart).toFixed(2)}</div>
      </div>
      <div className={`${styles.payBtn} btn`} id="checkout-button">
        Pay with {yocoLogo}
      </div>
    </div>
  )
}
