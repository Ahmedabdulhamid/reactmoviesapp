import { createSlice } from "@reduxjs/toolkit";
export const countSlice=createSlice({
    name:'ahmed',
    initialState:{
        count:1,
        count2:1
    },
    reducers:{
        increment:(state)=>{
            if(state.count<500){
                state.count+=1
            }
            

        },
        decrement:(state)=>{
            if(state.count>1){

               state.count-=1
            }

        },
        firstCount:(state)=>{
            state.count=1

        },
        lastCount:(state)=>{
            state.count=500

        },

        increment2:(state)=>{
            if(state.count2<500){
                state.count2+=1
            }
            

        },
        decrement2:(state)=>{
            if(state.count2>1){

               state.count2-=1
            }

        },
        firstCount2:(state)=>{
            state.count2=1

        },
        lastCount2:(state)=>{
            state.count2=500

        }



    }
})
export const moviePageList=countSlice.reducer
export const {increment,lastCount, decrement,firstCount,firstCount2 ,increment2,lastCount2, decrement2 }=countSlice.actions