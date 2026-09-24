import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Prabhas",
  email: "prabhas@gmail.com",
  phone: "9876543210",
  city: "Hyderabad",
  role: "Full Stack Developer",
};

const formSlice = createSlice({
  name: "form",
  initialState,

  reducers: {
    setFormData: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.city = action.payload.city;
      state.role = action.payload.role;
    },
  },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;