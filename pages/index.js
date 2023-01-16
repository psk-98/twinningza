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

export default function Home() {
  const state = useSelector((state) => state)
  const { loading, error, products } = state.products

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return loading ? (
    <Loader />
  ) : (
    <PageWrapper key={loading}>
      <Hero />
      <Slider header="Featured" products={products} />
      <OtherLinks />
    </PageWrapper>
  )
}
