import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../actions/accounts"
import PageWrapper from "../components/layout/PageWrapper"
import styles from "../styles/Auth.module.css"

export default function Login() {
  const router = useRouter()
  const state = useSelector((state) => state)
  const { accounts, checkout } = state
  const { redirect, loading } = checkout

  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (checkout?.redirect) router.push(redirect)
    if (accounts?.isAuthenticated) router.push("/")
  }, [accounts?.isAuthenticated])

  return (
    <PageWrapper key={router.route}>
      <div className="contained">
        <div className={styles.theForm}>
          <form
            onSubmit={handleSubmit((data) =>
              dispatch(
                login({ username: data.email, password: data.password }),
              ),
            )}
          >
            <div className={styles.inputGroup}>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
                placeholder="email address"
              />
              {errors?.email?.type === "required" && (
                <p>This field is required</p>
              )}
              {errors?.email?.type === "pattern" && (
                <p>Enter a valid email address</p>
              )}
            </div>
            <div className={styles.inputGroup}>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="password"
              />
              {accounts?.error && <p>{accounts?.error}</p>}
            </div>
            <div className={styles.btnGroup}>
              <input type="submit" value={"login"} className="btn" />
            </div>
          </form>
          <span>
            Don't have an account?
            <Link className="form-redirect" href="/register">
              register
            </Link>
          </span>
        </div>
      </div>
    </PageWrapper>
  )
}
