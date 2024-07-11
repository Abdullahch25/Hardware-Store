import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../services/Services"; // Example service for API calls

// Async thunks for product operations
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await productService.getProducts();
    return response.data;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (newProduct) => {
    const response = await productService.addProduct(newProduct);
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (updatedProduct) => {
    const response = await productService.updateProduct(updatedProduct);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    await productService.deleteProduct(productId);
    return productId;
  }
);

// Initial state
const initialState = {
  list: [],
  status: "idle",
  error: null,
};

// Redux Slice definition
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        state.list = state.list.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        );
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const productId = action.payload;
        state.list = state.list.filter((product) => product.id !== productId);
      });
  },
});

export default productSlice.reducer;
