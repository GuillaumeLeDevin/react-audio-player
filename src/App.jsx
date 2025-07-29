import Playlist from "./components/Playlist";
import Player from "./components/Player";
import PlayerPanel from "./layouts/Player/PlayerPanel";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-800 pt-20 px-4">
        <div className="max-w-xl mx-auto">
          <Player />
          <h1 className="text-slate-100 text-2xl">PlayerMania - Your songs</h1>
          <Playlist />
        </div>
      </div>
      <PlayerPanel />
    </>
  );
}

export default App;
