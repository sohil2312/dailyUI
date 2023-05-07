import { configureStore} from "@reduxjs/toolkit";
import { reset } from "./actions";
import { addValue, changeValue, Counterreducer, decrement, increment, Valuereducer } from "./Slices/Counterslice";
import { MoviesReducer ,addMovie,removeMovie} from "./Slices/MovieSlice";
import { SongsReducer,addSong,removeSong } from "./Slices/SongSlice";

const store = configureStore({
    reducer:{
        songr:SongsReducer,
        movies:MoviesReducer,
        count:Counterreducer,
        addValue:Valuereducer
    }
})

export {store,addMovie,removeMovie,addSong,removeSong,reset,increment,decrement,Valuereducer,addValue,changeValue}
