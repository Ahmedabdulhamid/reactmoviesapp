import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


import axios from 'axios';
export const getAllData=createAsyncThunk("getAllData",async(id,x)=>{
    const {rejectWithVlue}=x;


    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          include_adult: 'false',
          include_video: 'false',
          language: 'en-US',
          page: '1',
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
export const getAllSeries=createAsyncThunk('getAllSeries',async(id,thunkapi)=>{
    const {rejectWithVlue}=thunkapi;
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/tv',
        params: {
          include_adult: 'false',
          include_null_first_air_dates: 'false',
          language: 'en-US',
          page: '1',
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
export const getTopMovies=createAsyncThunk("getTopMovies",async(id,x)=>{
  const {rejectWithVlue}=x;


  const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        include_adult: 'false',
        include_video: 'false',
        language: 'en-US',
        page: '1',
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
export const getTopSeries=createAsyncThunk('getTopSeries',async(id,thunkapi)=>{
  const {rejectWithVlue}=thunkapi;
  const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/tv',
      params: {
        include_adult: 'false',
        include_null_first_air_dates: 'false',
        language: 'en-US',
        page: '1',
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
const counterSlice=createSlice({
    name:"ahmed",
    initialState:{
        series:[],
        products:[],
        loading:true,
        error:'NOT FOUND',
        topMovie:[],
        topSeries:[],
        error:''

    },
   
    extraReducers:(builder)=>{
        builder.addCase(getAllData.pending,(state)=>{
            state.loading=false;



        });
        builder.addCase(getAllData.fulfilled,(state,action)=>{
        
        state.products=action.payload.results
        state.loading=false;
        });
        builder.addCase(getAllData.rejected,(state)=>{
            state.loading=true;
            state.error='No Internet'

        })
        builder.addCase(getAllSeries.pending,(state)=>{
              state.loading=false;

        })
        builder.addCase(getAllSeries.fulfilled,(state,action)=>{
           
            state.series=action.payload.results
            state.loading=true
           
        })
        builder.addCase(getAllSeries.rejected,(state,action)=>{
            state.loading=true
            state.error='No Internet'
        })
       
      
    builder.addCase(getTopMovies.pending,(state)=>{
      state.loading=false;

    })
    builder.addCase(getTopMovies.fulfilled,(state,action)=>{
      
        state.topMovie=action.payload.results.filter((e)=>{
          return e.vote_average>6.6



        })
        state.loading=true
        
       
    })
    builder.addCase(getTopMovies.rejected,(state,action)=>{
        state.loading=true
        state.error='No Internet'
    })
   

    builder.addCase(getTopSeries.pending,(state)=>{
      state.loading=false;

    })
    builder.addCase(getTopSeries.fulfilled,(state,action)=>{
      
       state.topSeries=action.payload.results.filter((e)=>{
        return e.vote_average>4.3

       })
      
       
    })
    builder.addCase(getTopSeries.rejected,(state,action)=>{
        state.loading=true
        state.error='No Internet'

    })

    }
})
export const counter=counterSlice.reducer;
