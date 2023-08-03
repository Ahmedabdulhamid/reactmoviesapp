import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const SeriesDetails1=createAsyncThunk("SeriesDetails1",async(id,x)=>{
    const {rejectWithVlue}=x;


    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/${id}`,
        params: {language: 'en-US'},
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
export const xseriesDetails=createAsyncThunk("xseriesDetails",async(id,x)=>{
    const {rejectWithValue}=x;


    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/${id}/credits`,
        params: {language: 'en-US'},
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
        return rejectWithValue(e)

    }

  
})
export const seriesVideos=createAsyncThunk("seriesVideos",async(id,x)=>{
    const {rejectWithValue}=x;


    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/${id}/videos`,
        params: {language: 'en-US'},
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
        return rejectWithValue(e)

    }

  
})

const seriesDetailsSlicex=createSlice({
    name:"ahmed",
    initialState:{
        series:{},
        generes:[],
        casting:[],
        crew:[],
        videos:[],
        check:true,
        loading:true,
        error:''
    },
    extraReducers:(builder)=>{

        builder.addCase(SeriesDetails1.pending,(state,action)=>{
           
            state.loading=false;

      })

        builder.addCase(SeriesDetails1.fulfilled,(state,action)=>{
        
          state.loading=true
           state.series=action.payload
           state.generes=action.payload.genres

            
            });
            builder.addCase(SeriesDetails1.rejected,(state,action)=>{
               
                state.loading=true;
                state.error='No Internet'
    
            })    
            
            

            builder.addCase(xseriesDetails.pending,(state,action)=>{
                
                state.loading=false;
    
          })
    
            builder.addCase(xseriesDetails.fulfilled,(state,action)=>{
              state.loading=true
                state.casting=action.payload.cast

                state.crew=action.payload.crew
                });
            builder.addCase(xseriesDetails.rejected,(state,action)=>{
               
                state.loading=true;
    
            })   
            
            builder.addCase(seriesVideos.pending,(state,action)=>{
             state.loading=false;
    
          })
    
            builder.addCase(seriesVideos.fulfilled,(state,action)=>{
            
                state.loading=true
                
                state.videos=action.payload.results.filter((e,x)=>{
                    return x<1
                })
              
               
    
                
                });
                builder.addCase(seriesVideos.rejected,(state,action)=>{
                    state.loading=true
                  
                    
                })   

            
          

    }
})

export const detailsSeries =seriesDetailsSlicex.reducer