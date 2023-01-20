import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "./type"

export const placeOrder = createAsyncThunk(
  "PLACE_ORDER",
  async (chargeToken, { getState, dispatch, rejectWithValue }) => {
    try {
      const { cart } = getState().cart
      const { deliveryA } = getState().checkout
      params = {
        customer_address: deliveryA,
        order_items: cart,
        charge_token: chargeToken,
      }
      const res = await axios.post(`${BASE_URL}/payment/`, { params: params })
      return { res }
    } catch (err) {
      console.log(err)
      return rejectWithValue(err)
    }
  },
)
