import prevIcon from "../../assets/prev-icon.svg"
import { useDispatch, useSelector } from "react-redux"
import {prevSong} from "../../features/playlist"

export default function PreviousButton() {

  const dispatch = useDispatch()
  const playlist = useSelector(state => state.playlist)

  const handleClick = () => {
    const prevIndex = playlist.songs.findIndex(song => song.id === playlist.currentMusicID) - 1
    dispatch(prevSong(prevIndex))
  }

  return (
    <button
    onClick={handleClick}
    className='w-9 h-9 mr-4 bg-slate-400 rounded-full flex justify-center items-center'>
        <img
        className="w-5 h-5"
        src={prevIcon} alt="previous song" />
    </button>
  )
}
