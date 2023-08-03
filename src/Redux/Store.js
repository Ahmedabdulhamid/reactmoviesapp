import {configureStore} from "@reduxjs/toolkit";
import { counter } from "./CounterSlice";
import { movie } from "./MoviePageSlice";
import { moviePageList } from "./Count";
import { serie } from "./SeriesPageSlice";
import {SeriesPageSlice} from './SeriesPageSlice'
import { details } from "./.DetailsSlise";
import { detailsSeries } from "../SeiesDetails";
import { searchSlice } from "./Search";

export  const store=configureStore({
    reducer:{
        counter,
        movie,
        moviePageList,
        serie,
        details,
        detailsSeries,
        searchSlice,
       
      
      

    }
})
