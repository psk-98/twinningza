import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadUser } from "../../actions/accounts"

export default function PrivateRoutes({ children }) {
  const state = useSelector((state) => state)
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
    if (
      !state.accounts?.isAuthenticated &&
      !state.accounts?.loading &&
      state.accounts?.user === null
    )
      router.push("/login")
  }, [])

  return <>{children}</>
}
