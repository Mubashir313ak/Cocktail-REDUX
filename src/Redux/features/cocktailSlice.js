import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    try {
      const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
      return response.data;
    } catch (error) {
     
      throw error;
    }
  }
);

const cockSlice = createSlice({
  name: "cocktails",
  initialState: {
    loading: false,
    cocktails: [],
    error: null,
    cocktail: [],
  },
  reducers: {},  
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = action.payload.drinks;
      })
      .addCase(fetchCocktails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cockSlice.reducer;
