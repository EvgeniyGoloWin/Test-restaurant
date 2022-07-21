import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
   'products/fetchProducts',
   async (_, thunkAPI) => {
      try {
         const response = await fetch('https://random-data-api.com/api/restaurant/random_restaurant?size=100');
         return await response.json();
      } catch (error) {
         return thunkAPI.rejectWithValue({ error: error?.message });
      }
   }
)

const initialState = {
   loading: false,
   error: null,
   products: [],
   filteredProducts: [],
   productTypes: [],
   filters: []
}

export const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      setFilter(state, action) {
         const indexProduct = state.filters.indexOf(action.payload.product)
         if (state.filters.includes(action.payload.product)) {
            state.filters.splice(indexProduct, 1)
         } else {
            state.filters.push(action.payload.product)
         }
         state.products.forEach((product) => {
            if (state.filters.includes(product.type)) {
               state.filteredProducts.push(product)
            } else {
               state.filteredProducts = []
               state.products.forEach(product => {
                  if (state.filters.includes(product.type)) {
                     state.filteredProducts.push(product)
                  }
               })
            }
         })
         if (!state.filters.length) state.filteredProducts = []
         state.filteredProducts = state.filteredProducts.filter((rest, index, self) =>
            index === self.findIndex((element) => element.id === rest.id))
      }
   },
   extraReducers: (builder) => {
      builder.addCase(
         fetchProducts.pending, (state) => {
            state.loading = true;
         });
      builder.addCase(
         fetchProducts.fulfilled, (state, { payload }) => {
            state.products = payload;
            const typeList = payload.map((element) => element.type);
            state.productTypes = Array.from(new Set(typeList))
            state.filters = []
            state.loading = false;
         });
      builder.addCase(
         fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
         });
   }
})

export const { setFilter } = productsSlice.actions;

export default productsSlice.reducer