import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
        songs: undefined,
        play: false,
        currentMusicID: undefined
    }

export const playlist = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        addBaseSongs: (state, action) => {
            state.songs = action.payload 
            state.currentMusicID = action.payload[0].id
        },
        toggleStart: (state, action) => {
            state.play = !state.play
        },
        nextSong: (state, action) => {
            state.currentMusicID = action.payload === state.songs.length ? state.songs[0].id : state.songs[action.payload].id
        },
        prevSong: (state, action) => {
            state.currentMusicID = action.payload < 0 ? state.songs[state.songs.length - 1].id : state.songs[action.payload].id
        },
        changeSong: (state, action) => {
            state.currentMusicID = action.payload
            state.play = true
        }
    }
})

export function getMusicsData(action) {
    return function(dispatch, getState){
        fetch("/data/playlist.json")
        .then(data => data.json())
        .then(data => dispatch(addBaseSongs(data.playlist)))
    }
}

export const {
  addBaseSongs,
  toggleStart,
  nextSong,
  prevSong,
  changeSong
} = playlist.actions
export default playlist.reducer