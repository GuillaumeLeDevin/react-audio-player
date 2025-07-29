import nextIcon from "../../assets/next-icon.svg"
import { useDispatch, useSelector } from "react-redux"
import {nextSong} from "../../features/playlist"

export default function NextButton() {

  const dispatch = useDispatch()
  const playlist = useSelector(state => state.playlist)

  function handleClick() {
    if(playlist.songs) {
      const nextIndex = playlist.songs.findIndex(song => song.id === playlist.currentMusicID) + 1
      dispatch(nextSong(nextIndex))
    }
  }

  return (
    <button
    onClick={handleClick}
    className='w-9 h-9 ml-4 bg-slate-400 rounded-full flex justify-center items-center'>
        <img
        className="w-5 h-5"
        src={nextIcon} alt="next song" />
    </button>
  )
}
