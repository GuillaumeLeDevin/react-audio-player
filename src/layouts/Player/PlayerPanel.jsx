import { useSelector } from "react-redux";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import TogglePlayButton from "./TogglePlayButton";
import ProgressBar from "./ProgressBar";

export default function PlayerPannel() {
  const playlist = useSelector((state) => state.playlist);
  const currentSong = playlist.songs?.find(
    (obj) => obj.id === playlist.currentMusicID
  );
  console.log(playlist);

  return (
    <div className="fixed w-full bottom-0 rounded-t border-t-2 border-gray-800 p-6 bg-gradient-to-r from-indigo-100 to-purple-200">
      <div className="max-w-[800px] mx-auto mb-2">
        <p>{playlist.songs && currentSong.title}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-lg text-gray-900">
          {playlist.songs && currentSong.artist}
        </p>
        <p className="text-lg text-gray-900">
          {playlist.songs?.findIndex(
            (song) => song.id === playlist.currentMusicID
          ) + 1}{" "}
          / {playlist.songs?.length}
        </p>
      </div>
      <div className="flex justify-center items-center mb-5">
          <PreviousButton />
          <TogglePlayButton />
          <NextButton />
      </div>
          <ProgressBar />
    </div>
  );
}
