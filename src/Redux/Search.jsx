import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const movieSearch=createAsyncThunk("movieSearch",async(id,x)=>{
    const {rejectWithVlue}=x;


    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {query: `${id}`, include_adult: 'false', language: 'en-US', page: '1'},
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
export const seriesSearch=createAsyncThunk("seriesSearch",async(id,x)=>{
    const {rejectWithVlue}=x;


    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/tv',
        params: {
          query: `${id}`,
          include_adult: 'false',
          language: 'en-US',
          page: '1'
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
const movieSearchSlice=createSlice({
    name:'ahmed',
    initialState:{
        searchData:[],
        searchDataSeries:[],
        loading:true
    },
    extraReducers:(builder)=>{
        builder.addCase(movieSearch.pending,(state)=>{
            state.loading=false

        })
        builder.addCase(movieSearch.fulfilled,(state,action)=>{
            state.loading=true;
            state.searchData=action.payload.results
        })
        builder.addCase(movieSearch.rejected,(state)=>{
            state.loading=true

        })
        builder.addCase(seriesSearch.pending,(state)=>{
            state.loading=false

        })
        builder.addCase(seriesSearch.fulfilled,(state,action)=>{
            state.loading=true;
            state.searchDataSeries=action.payload.results

        })
        builder.addCase(seriesSearch.rejected,(state)=>{
            state.loading=true

        })


    }
})
export const searchSlice=movieSearchSlice.reducer