import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product_Type, updateProductParamsTypes } from "../../utils/types";

const API_URL = "https://vistas-server.onrender.com/api/products";

export const fetchProducts = createAsyncThunk(
  "/api/products",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error))
        return rejectWithValue(error.response?.data || "An Error occurred");
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const addProduct = createAsyncThunk(
  "/products/add",
  async (data: Product_Type, { rejectWithValue }) => {
    try {
      if (!data) {
        return rejectWithValue("No Data To Upload");
      }
      const response = await axios.post(`${API_URL}`, data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error))
        return rejectWithValue(error.response?.data || "An Error occurred");
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const updateProduct = createAsyncThunk(
  "/products/update",
  async ({ data, id }: updateProductParamsTypes, { rejectWithValue }) => {
    try {
      if (!data) {
        return rejectWithValue("No Data To update");
      }
      const response = await axios.put(`${API_URL}/update_by_id/${id}`, data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error))
        return rejectWithValue(error.response?.data || "An Error occurred");
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const deleteAll = createAsyncThunk(
  "/products/delete_all",
  async (_, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/delete_all`);
    } catch (error) {
      if (axios.isAxiosError(error)) return rejectWithValue(error);
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const deleteById = createAsyncThunk(
  "/products/delete_by_id/",
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/delete_by_id/${id}`);
    } catch (error) {
      if (axios.isAxiosError(error)) return rejectWithValue(error);
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const uploadImage = createAsyncThunk(
  "/products/upload",
  async (file: File, { rejectWithValue }) => {
    try {
      if (!file) {
        return rejectWithValue("No file provided");
      }

      const formData = new FormData();

      formData.append("file", file);
      const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error))
        return rejectWithValue(error.response?.data || "An Error occurred");
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

interface Products {
  isLoading: boolean;
  productURL: string | null;
  products: object[];
  product: object;
  types: string[];
  error: string | null;
  isDeleted: boolean | null;
}
const initialState: Products = {
  isLoading: true,
  productURL: null,
  products: [],
  product: [],
  types: [],
  error: null,
  isDeleted: null,
};

const apiSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload as string;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.error = null;
      })

      .addCase(uploadImage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload as string;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productURL = action.payload.image_url;
        state.error = null;
      })

      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload as string;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        state.error = null;
        state.isDeleted = false;
      })

      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload as string;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        state.error = null;
        state.isDeleted = false;
      })

      .addCase(deleteAll.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isDeleted = null;
      })
      .addCase(deleteAll.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload as string;
        state.isDeleted = false;
      })
      .addCase(deleteAll.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.isDeleted = true;
      })

      .addCase(deleteById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isDeleted = null;
      })
      .addCase(deleteById.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload as string;
        state.isDeleted = false;
      })
      .addCase(deleteById.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.isDeleted = true;
      });
  },
});

export default apiSlice.reducer;
