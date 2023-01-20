import { useDispatch, useSelector } from "react-redux"
import useScript from "react-script-hook/lib/use-script"
import { placeOrder } from "../../actions/checkout"
import { yocoLogo } from "../../public/svgs"
import styles from "../../styles/Checkout.module.css"
import { handleTotalPrice } from "../cart/helpers"

export default function Payment() {
  const state = useSelector((state) => state)
  const { numberCart, cart } = state.cart
  const dispatch = useDispatch()

  useScript({
    src: "https://js.yoco.com/sdk/v1/yoco-sdk-web.js",
    onload: () => {
      const yoco = new YocoSDK({
        publicKey: "pk_test_ed3c54a6gOol69qa7f45",
      })
      var checkoutButton = document.querySelector("#pay-button")
      checkoutButton.addEventListener("click", function () {
        yoco.showPopup({
          amountInCents: (parseFloat(handleTotalPrice(cart)) * 100).toString(),
          currency: "ZAR",
          description: "Awesome description",
          displayMethod: "MANUAL",
          callback: function (chargeToken) {
            console.log(chargeToken)
            dispatch(placeOrder(chargeToken.id))
            alert(
              `Card tokenization completed, your server must now process the payment`,
            )
          },
        })
      })
    },
  })

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
      <div className={`${styles.payBtn} btn`} id="pay-button">
        Pay with {yocoLogo}
      </div>
    </div>
  )
}
