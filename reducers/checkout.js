import { createSlice } from "@reduxjs/toolkit"
import { placeOrder } from "../actions/checkout"

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {},
  reducers: {
    updateAddress: (state, action) => {
      state.deliveryA = action.payload
    },
    updateBilling: (state, action) => {
      state.billingA = action.payload
    },
    updateRedirect: (state, action) => {
      state.redirect = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(placeOrder.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(placeOrder.fulfilled, (state, action) => {
      state.orderSucess = true
      state.loading = false
      state.order_number = action.payload.res.data.ref_code
      state.being_delivered = action.payload.res.data.being_delivered
      state.tracking_details = action.payload.res.data.tracking_details
      console.log(action.payload)
    })
    builder.addCase(placeOrder.rejected, (state, action) => {
      state.orderSucess = false
      state.loading = false
    })
  },
})

export const { updateAddress, updateBilling } = checkoutSlice.actions
