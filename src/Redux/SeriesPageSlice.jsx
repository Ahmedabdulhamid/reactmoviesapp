import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
export const SeriesPageSlice=createAsyncThunk('SeriesPageSlice',async(id,thunkapi)=>{
    const {rejectWithVlue}=thunkapi;
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/tv',
        params: {
          include_adult: 'false',
          include_null_first_air_dates: 'false',
          language: 'en-US',
          page: id,
          sort_by: 'popularity.desc'
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTlkNmZmZjU0ZmE2NmM5ZWQ4OTExZmFlMTc4Y2I3YyIsInN1YiI6IjY0ODQxZDY1ZDJiMjA5MDE0ZTA4YzE5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9srmjk23AKTzqQth3NrJFJ15Hp7zDR9QZQtnJP8vBtY'
        }
      };
      try{
        const response=await axios(options)
        const data =await response.data;
        
        return data
      }
      catch (error){
        return rejectWithVlue(error)
      }
     

})

export const seriesSlice=createSlice({
    name:'ahmed',
    initialState:{
        series:[],
        loading:true,
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(SeriesPageSlice.pending,(state,action)=>{
            state.loading=false

        })
        builder.addCase(SeriesPageSlice.fulfilled,(state,action)=>{
           
            state.loading=true;
            state.series=action.payload.results
        })
        builder.addCase(SeriesPageSlice.rejected,(state,action)=>{
            state.loading=true
            state.error='No Internet'
        })

    }
})
export const serie=seriesSlice.reducer