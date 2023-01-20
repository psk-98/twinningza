import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { updateAddress } from "../../reducers/checkout"
import formStyles from "../../styles/Form.module.css"

export default function Shipping({ setIsShip, setIsPay }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()
  const router = useRouter()

  handleForm = (data) => {
    const {
      email,
      number,
      name,
      address,
      surname,
      postal,
      city,
      province,
      country,
    } = data
    dispatch(
      updateAddress({
        email,
        number,
        name,
        address,
        surname,
        postal,
        city,
        province,
        country,
      }),
    )
    setIsShip(false)
    setIsPay(true)
  }

  return (
    <div className="contained">
      <form
        className={formStyles.theForm}
        onSubmit={handleSubmit((data) => handleForm(data))}
      >
        <div className={formStyles.inputGroup}>
          <input
            {...register("email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
            placeholder="email address"
          />
          {errors?.email?.type === "required" && <p>This field is required</p>}
          {errors?.email?.type === "pattern" && (
            <p>Enter a valid email address</p>
          )}
        </div>
        <div className={formStyles.inputGroup}>
          <input
            type={"number"}
            {...register("number", {
              required: true,
              minLength: 10,
            })}
            placeholder="Phone number"
          />
          {errors?.number?.type === "required" && <p>This field is required</p>}
          {errors?.number?.type === "minLength" && (
            <p>Must be atleast 10 digits</p>
          )}
        </div>
        <div className={formStyles.inputGroup}>
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
        <div className={formStyles.inputGroup}>
          <input
            {...register("surname", { pattern: /^[A-Za-z]+$/i })}
            placeholder="Surname"
          />
          {errors?.surname?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
        </div>
        <div className={formStyles.inputGroup}>
          <input
            {...register("address", { required: true })}
            placeholder="Address"
          />
          {errors?.address?.type === "required" && (
            <p>This field is required</p>
          )}
        </div>
        <div className={formStyles.inputGroup}>
          <input
            type={"number"}
            {...register("postal", { required: true })}
            placeholder="Postal code"
          />
          {errors?.postal?.type === "required" && <p>This field is required</p>}
        </div>
        <div className={formStyles.inputGroup}>
          <input {...register("city", { required: true })} placeholder="City" />
          {errors?.city?.type === "required" && <p>This field is required</p>}
        </div>
        <div className={formStyles.inputGroup}>
          <input
            {...register("province", { required: true })}
            placeholder="Province"
          />
          {errors?.province?.type === "required" && (
            <p>This field is required</p>
          )}
        </div>
        <div className={formStyles.inputGroup}>
          <select {...register("country")}>
            <option value="ZA">South Africa</option>{" "}
          </select>
        </div>
        <div className={formStyles.btnGroup}>
          <input type={"submit"} value="next" className="btn" />
        </div>
      </form>
    </div>
  )
}
