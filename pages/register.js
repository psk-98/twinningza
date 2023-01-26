import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { register as registerFunc } from "../actions/accounts"
import { useForm, useWatch } from "react-hook-form"
import PageWrapper from "../components/layout/PageWrapper"
import { useDispatch, useSelector } from "react-redux"
import styles from "../styles/Auth.module.css"
import Link from "next/link"

export default function Register() {
  const router = useRouter()
  const state = useSelector((state) => state)
  const { accounts, checkout } = state
  const { redirect } = checkout
  const [isNotMatch, setIsNotMatch] = useState(false)

  const dispatch = useDispatch()

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (watch().password === watch().password2) setIsNotMatch(false)
    else setIsNotMatch(true)
  }, [watch()])

  useEffect(() => {
    if (checkout?.redirect) router.push(redirect)
    if (accounts?.isAuthenticated) router.push("/")
  }, [accounts?.isAuthenticated])

  return (
    <PageWrapper key={router.route}>
      {console.log(isNotMatch)}

      <div className="contained">
        <form
          onSubmit={handleSubmit((data) => {
            //console.log(data)
            const { email, password, name, surname } = data
            dispatch(registerFunc({ email, password, name, surname }))
          })}
        >
          <div className={styles.inputGroup}>
            <input
              {...register("name", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
                maxLength: 30,
              })}
              placeholder="Name"
            />
            {errors?.name?.type === "required" && <p>This field is required</p>}
            {errors?.name?.type === "maxLength" && (
              <p>First name cannot exceed 20 characters</p>
            )}
            {errors?.name?.type === "pattern" && (
              <p>Alphabetical characters only</p>
            )}
          </div>
          <div className={styles.inputGroup}>
            <input
              {...register("surname", { pattern: /^[A-Za-z]+$/i })}
              placeholder="Surname"
            />
            {errors?.surname?.type === "pattern" && (
              <p>Alphabetical characters only</p>
            )}
          </div>
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
            {accounts?.registerError && <p>{accounts?.registerError}</p>}
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="password"
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              {...register("password2", {
                required: true,
              })}
              placeholder="Retype password"
            />
            {isNotMatch && <p>passwords dont match</p>}
          </div>
          <div className={styles.btnGroup}>
            <input type="submit" value={"register"} className="btn" />
          </div>
        </form>
        <span>
          Already have an account?
          <Link className="form-redirect" href="/login">
            login
          </Link>
        </span>
      </div>
    </PageWrapper>
  )
}
