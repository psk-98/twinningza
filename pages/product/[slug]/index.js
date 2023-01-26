import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProduct, getProducts } from "../../../actions/products"
import Slider from "../../../components/common/productsSlider"
import Loader from "../../../components/layout/loader"
import Desc from "../../../components/product/desc"
import Images from "../../../components/product/productImgs"
import Sizes from "../../../components/product/productSizes"
import styles from "../../../styles/Product.module.css"
import { updateSlug } from "../../../reducers/params"
import { addToCart, clearCart } from "../../../reducers/cart"
import Link from "next/link"
import PageWrapper from "../../../components/layout/PageWrapper"

export default function Product() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const router = useRouter()

  const { slug } = router.query
  const { loading, error, product, selectedDesc, products, selectedSizes } =
    state.products

  useEffect(() => {
    dispatch(getProduct(slug))
    dispatch(updateSlug(slug))
    dispatch(getProducts("like"))
  }, [slug])

  return loading ? (
    <Loader />
  ) : error ? (
    <div className="error-msg">{error?.message}!</div>
  ) : (
    <PageWrapper key={loading}>
      <div className="contained">
        <div className={styles.productCard}>
          <Images product={product} />
          <div className={styles.details}>
            <div className={styles.name}>{product?.name}</div>
            <Link href={`/products/${product?.category}`}>
              <div className={`nav-text lighter`}>{product?.category}</div>
            </Link>
            <div className={`nav-text`}>
              <span className={styles.priceCurrency}>R</span>
              <span className={styles.price}>{product?.price}</span>
            </div>
            {product?.product_stock.length === 0 ? (
              <div className={`${styles.addCart} btn`}>Sold out</div>
            ) : (
              <>
                <Sizes />
                <div
                  className={`${styles.addCart} btn`}
                  onClick={() => {
                    if (selectedSizes.length > 0)
                      dispatch(addToCart({ product, size: selectedSizes }))
                  }}
                >
                  Add to bag
                </div>
                <div
                  className={`${styles.buyNow} btn`}
                  onClick={() => {
                    if (selectedSizes.length > 0) {
                      dispatch(clearCart())
                      dispatch(addToCart({ product, size: selectedSizes }))
                      router.push("/checkout")
                    }
                  }}
                >
                  Buy now
                </div>
              </>
            )}
          </div>
          <Desc selected={selectedDesc} product={product} />
        </div>
      </div>
      <Slider
        header="You May Also Like"
        products={products}
        loading={loading}
      />
    </PageWrapper>
  )
}
