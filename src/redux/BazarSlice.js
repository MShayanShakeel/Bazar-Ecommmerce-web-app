import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    productData: [],
    userInfo: null,
};
export const bazarslice = createSlice({
    name : "bazar",
    initialState,
    reducers:{
        addTocart: (state, action)=> {
            const item = state.productData.find(
                (item)=> item._id === action.payload._id);
                if (item) {
                    item.quantity += action.payload.quantity;
                }
                else{
                    state.productData.push(action.payload);
                }  
        },
        deleteItem: (state , action)=>{
            state.productData = state.productData.filter(
                (item) => item._id !==action.payload);
        },
        resetcart: (state)=> {
            state.productData= [];
        },
        incrimentQut: (state ,  action )=>{
            const item = state.productData.find(
                (item)=> item._id === action.payload._id
            );
       if (item) {
        item.quantity++;
       }
        },
        decrimentQut: (state , action) => {
            const item = state.productData.find(
                (item)=> item._id ===action.payload._id
            );
            if (item.quantity === 1){
            item.quantity = 1;}
        
        else { item.quantity --; }    
        },
        //========user start ======//
        addUser :(state ,action) =>{
            state.userInfo = action.payload;
        },
        removeUser: (state)=>{
            state.userInfo = null;
        },
        //====== user end =====//
        
    },
});

export const{ 
addTocart , 
deleteItem , 
resetcart , 
incrimentQut,
decrimentQut, 
addUser,
removeUser} = bazarslice.actions;
export default bazarslice.reducer;