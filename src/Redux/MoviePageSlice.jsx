import { createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const moviesx=createAsyncThunk('moviesx',async(id,thunkApi)=>{
  console.log(id);
  
    const{rejectWithVlue}=thunkApi
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          include_adult: 'false',
          include_video: 'false',
          language: 'en-US',
          page:id,
          sort_by: 'popularity.desc'
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTlkNmZmZjU0ZmE2NmM5ZWQ4OTExZmFlMTc4Y2I3YyIsInN1YiI6IjY0ODQxZDY1ZDJiMjA5MDE0ZTA4YzE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9srmjk23AKTzqQth3NrJFJ15Hp7zDR9QZQtnJP8vBtY'
        }
      };
    try{
       
       const response=await axios(options)
       const data=response.data
       return data
         

    }
    catch(e){
        return rejectWithVlue(e)

    }
})


export const moviesSlice=createSlice({
    name:"ahmed",
    initialState:{
        movies:[],
        loading:true,
        count:1,
        error:""
        
    },
   
    extraReducers:(builder)=>{
        builder.addCase(moviesx.pending,(state)=>{
            state.loading=false
            


        })
        builder.addCase(moviesx.fulfilled,(state,action)=>{
          
            state.movies=action.payload.results;
            state.loading=true
          
        })
        builder.addCase(moviesx.rejected,(state)=>{
            state.loading=true
            state.error='No Internet'


        })

 

     


    }
})
export const movie=moviesSlice.reducer
