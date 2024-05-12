import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "get",
        url: "http://localhost:3000/categories",
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });

      dispatch(setData(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const { setData } = categorySlice.actions;

export default categorySlice.reducer;
