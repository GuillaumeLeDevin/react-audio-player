import { useSelector } from "react-redux"
import timeFormat from "../../utils/timeFormat"

export default function ProgressBar() {

  const progressData = useSelector(state => state.progress)

  const handleProgressClick = (e) => {
    const player = document.getElementById("audio-player")
    const rect = e.target.getBoundingClientRect()
    const width = rect.width
    const x = e.clientX - rect.left

    player.currentTime = (x / width) * progressData.totalDuration
  }

  return (
    <div className="max-[800px] mx-auto">
      <div
      onClick={handleProgressClick}
      className="bg-slate-900 h-2 rounded cursor-pointer overflow-hidden">
        <div
        style={{transform:`scaleX(${progressData.current / progressData.totalDuration})`}}
        className="bg-indigo-400 origin-left h-full pointer-events-none">
        </div>
      </div>
      <div className="flex justify-between">
        <span>{timeFormat(progressData.current)}</span>
        <span>{timeFormat(progressData.totalDuration)}</span>
      </div>
    </div>
  )
}
