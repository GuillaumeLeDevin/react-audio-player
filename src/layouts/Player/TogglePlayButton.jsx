import play from "../../assets/play-icon.svg"
import pause from "../../assets/pause-icon.svg"
import { useDispatch, useSelector } from "react-redux"
import { toggleStart } from "../../features/playlist"


export default function TogglePlayButton() {

  const playlist = useSelector(state => state.playlist)
  const dispatch = useDispatch()
  console.table(playlist)

  return (
    
    <button
    onClick={() => dispatch(toggleStart())}
    className="w-14 h-14 shadow-md ml-4 bg-slate-50 rounded-full flex justify-center items-center ">
        <img src={playlist.play ? pause : play} alt="toggle button" />
    </button>
  )
}
