import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  list: [],
  page: 1,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.list = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const fetchData = (params) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "get",
        url: "http://localhost:3000/products",
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
        params: params,
      });

      dispatch(setData(data));
      dispatch(setPage(data.totalPage));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchDataById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "get",
        url: `http://localhost:3000/products/${id}`,
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

export const deleteProductById = (id) => {
  return async () => {
    try {
      await axios({
        method: "delete",
        url: `http://localhost:3000/products/${id}`,
        headers: {
          Authorization: "Bearer " + localStorage.access_token,
        },
      });

      Swal.fire({
        text: "Product has been deleted",
        icon: "success",
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      Swal.fire({
        text: error.response.data.message,
        icon: "error",
      });
    }
  };
};
export const { setData, setPage } = productSlice.actions;

export default productSlice.reducer;
