import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fillDurationVariables } from "../features/progress"
import { updateProgress } from "../features/progress"

export default function Player() {

    const dispatch = useDispatch()
    const playlist = useSelector( state => state.playlist )
    const audioRef = useRef()

    function handleLoadedData(e) {
      if(playlist.songs) {
        dispatch(fillDurationVariables({
          currentTime: e.target.currentTime,
          totalDuration: e.target.duration
        }))
      }
    }
    function handleTimeUpdate(e) {
      dispatch(updateProgress(e.target.currentTime))
    }

    useEffect(() => {
      if(playlist.songs && playlist.play) {
        audioRef.current.play()
      }
      else {
        audioRef.current.pause()
      }
    }, [playlist])

  return (
    <audio
    //controls
    id="audio-player"
    ref={audioRef}
    src={playlist.songs?.find(obj => obj.id === playlist.currentMusicID).url}
    onLoadedData={handleLoadedData}
    onTimeUpdate={handleTimeUpdate}
    ></audio>
  )
}
