import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paymentData: {},
  loading: false,
  error: null,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    fetchPaymentDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPaymentDataSuccess(state, action) {
      state.loading = false;
      state.paymentData = action.payload;
      state.error = null;
    },
    fetchPaymentDataFailure(state, action) {
      state.loading = false;
      state.paymentData = {};
      state.error = action.payload;
    },
    clearPaymentData(state) {
      state.paymentData = {};
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  fetchPaymentDataStart,
  fetchPaymentDataSuccess,
  fetchPaymentDataFailure,
  clearPaymentData,
} = paymentSlice.actions;

export const selectPaymentData = (state) => state.payment.paymentData;

export default paymentSlice.reducer;
