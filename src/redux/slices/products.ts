import { createSlice } from "@reduxjs/toolkit";

interface state {
  isLoading: boolean;
  products: object[];
  product: object;
  types: string[];
}
const initialState: state = {
  isLoading: true,
  products: [],
  product: [],
  types: [],
};


const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
