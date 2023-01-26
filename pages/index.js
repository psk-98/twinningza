import Head from "next/head"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../actions/products"
import Slider from "../components/common/productsSlider"
import Hero from "../components/home/hero"
import OtherLinks from "../components/home/otherLinks"
import Loader from "../components/layout/loader"
import PageWrapper from "../components/layout/PageWrapper"
import { AnimatePresence, motion } from "framer-motion"
import { containerVariants } from "../animations/routes"
import axios from "axios"
import { BASE_URL } from "../actions/type"
import { wrapper } from "../store/store"
import { setProducts } from "../reducers/products"

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { dispatch, getState } = store
    const { pageSize, sort } = getState().params
    let params = { page_size: 30, sort: sort }

    const res = await axios.get(`${BASE_URL}/products`, { params })
    //const { data } = await res.json()
    //console.log(res.data)
    dispatch(setProducts(res.data))
  },
)

export default function Home() {
  const state = useSelector((state) => state)
  const { loading, error, products } = state.products

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getProducts())
  // }, [])

  const filterWomen = () => {
    let temp = products.filter((product) => {
      return product.category === "women"
    })
    return temp.slice(0, 8)
  }
  const filterMen = () => {
    let temp = products.filter((product) => {
      return product.category === "men"
    })
    return temp.slice(0, 8)
  }
  const filterKids = () => {
    let temp = products.filter((product) => {
      return product.category === "kids"
    })
    return temp.slice(0, 8)
  }

  return loading ? (
    <Loader />
  ) : (
    <PageWrapper key={loading}>
      <Hero />
      <Slider
        header="Shop for women"
        products={filterWomen()}
        link={"/products/women"}
      />
      <Slider
        header="Shop for men"
        products={filterMen()}
        link={"/products/men"}
      />
      <Slider
        header="Shop for kids"
        products={filterKids()}
        link={"/products/kids"}
      />
    </PageWrapper>
  )
}
