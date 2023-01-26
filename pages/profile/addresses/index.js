import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import PrivateRoutes from "../../../components/common/privateRoutes"
import PageWrapper from "../../../components/layout/PageWrapper"
import styles from "../../../styles/Profile.module.css"
import formStyles from "../../../styles/Form.module.css"
import { useForm } from "react-hook-form"
import { updateAddress } from "../../../actions/accounts"

export default function Addresses() {
  const router = useRouter()
  const [isAdd, setIsAdd] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (isEdit) {
      const {} = useForm({
        defaultValues: {
          name,
          address,
          postal,
          city,
          province,
          country,
        },
      })
    }
  }, [isEdit])

  //const { addresses } = state.accounts?.user

  return (
    <PrivateRoutes>
      {isAdd ? (
        <PageWrapper key={isAdd}>
          <div className={styles.addAddressBtn}>
            <p></p>
            <div onClick={() => setIsAdd(true)}>Add address</div>
          </div>
          <div className={styles.addressList}></div>
        </PageWrapper>
      ) : (
        <PageWrapper key={isAdd}>
          <form
            className={formStyles.theForm}
            onSubmit={handleSubmit((data) => dispatch(updateAddress(data)))}
          >
            <div className={formStyles.inputGroup}>
              <input
                {...register("name", { required: true })}
                placeholder="Address name e.g home address"
              />
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
              {errors?.postal?.type === "required" && (
                <p>This field is required</p>
              )}
            </div>
            <div className={formStyles.inputGroup}>
              <input
                {...register("city", { required: true })}
                placeholder="City"
              />
              {errors?.city?.type === "required" && (
                <p>This field is required</p>
              )}
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
        </PageWrapper>
      )}
    </PrivateRoutes>
  )
}
