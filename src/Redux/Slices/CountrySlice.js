
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  countries: [],
  error: "",
};

const loadCountries = createAsyncThunk("api/loadCountries", async () => {
  return await axios
    .get("https://restcountries.com/v2/all?fields=name,region,flag")
    .then((response) => {
      return response.data;
    });
});

const countrySlice = createSlice({
  name: "countrySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadCountries.fulfilled, (state, { payload }) => {
        state.countries = payload;
        state.loading = false;
      })
      .addCase(loadCountries.rejected, (state) => {
        state.error = "Something went wrong!";
        state.loading = false;
      });
  },
});

export { loadCountries };
export default countrySlice.reducer;
