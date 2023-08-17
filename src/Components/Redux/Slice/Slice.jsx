import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  value: {
    addCart: [],
    userLogin:"false",
    ApiData: "",
    loginData:[],
    signUpIdData:""

  },
};
export const Slice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setaddCart: (state, action) => {
      if (current(state.value.addCart).length >= 1) {
    
        let filterData = current(state.value.addCart).filter((data)=>data.LoginId === action.payload.userId)
        let arr = filterData.map(
          (dataProduct) => dataProduct.product?.id
        );
      
        if (arr.includes(action.payload.item.id)) {

          const tempData = JSON.parse(JSON.stringify(state.value.addCart));
          console.log(tempData,"action.payload.item.id")
          for (const i of tempData) {
          if (i.product.id === action.payload.item.id && i.LoginId === action.payload.userId) {
              i.quantity = parseInt(i.quantity) + 1;  
            
            }
          }

          const data = {...state.value,addCart:tempData} 
          return {
            ...state,
            value: {
            ...data
            },
          };
        } else {
          state.value.addCart.push({ product: action.payload.item, quantity: 1,LoginId: action.payload.userId });
        }
      } else {
        state.value.addCart.push({ product: action.payload.item, quantity: 1,LoginId: action.payload.userId });
      }
    },

    setsubCart: (state, action) => {
      if (current(state.value.addCart).length >= 1) {
        let arr = current(state.value.addCart)?.map(
          (dataProduct) => dataProduct.product?.id
        );
        if (arr.includes(action.payload.id)) {
          const tempData = JSON.parse(JSON.stringify(state.value.addCart));
          for (const i of tempData) {
            if (i.product.id === action.payload.id) {
              i.quantity = parseInt(i.quantity) - 1;
            }
          }
          const data = {...state.value,addCart:tempData} 
          return {
            ...state,
            value: {
            ...data
            },
          };
        }
      }
    },

    setApiData: (state, action) => {
      state.value.ApiData = action.payload;
    },
    setDeleteCart: (state, action) => {
      if (current(state.value.addCart).length >= 1) {
        let arr = current(state.value.addCart)?.map(
          (dataProduct) => dataProduct.product?.id
        );
        if (arr.includes(action.payload.id)) {
          const tempData = JSON.parse(JSON.stringify(state.value.addCart));
          for (const i of tempData) {
            if (i.product.id === action.payload.id) {
              const remainData =
                tempData &&
                tempData.filter(
                  (item) => item.product.id !== action.payload.id
                );
              return {
                ...state,
                value: {
                  addCart: remainData,
                },
              };
            }
          }
          return {
            ...state,
            value: {
              addCart: tempData,
            },
          };
        }
      }
    },
    setuserLogin:(state,action)=>{
      state.value.userLogin=action.payload
 
    },
    setLoginData:(state,action)=>{
      state.value.loginData = action.payload
      
    },
    setSignUpIdData:(state,action)=>{
      state.value.signUpIdData=action.payload
    }
  },
});
export const { setaddCart, setsubCart, setApiData, setDeleteCart,setuserLogin,setLoginData,setSignUpIdData } =
  Slice.actions;

export default Slice.reducer;
