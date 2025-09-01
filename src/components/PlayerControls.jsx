const PlayerControls = ({ playSong, nextSong, shuffleSong, loop, setLoop }) => {
  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={playSong}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition cursor-pointer"
      >
        ▶️ Play
      </button>

      <button
        onClick={nextSong}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition cursor-pointer"
      >
        ⏭️ Next
      </button>

      <button
        onClick={shuffleSong}
        className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl transition cursor-pointer"
      >
        🔀 Shuffle
      </button>

      <button
        onClick={() => setLoop(!loop)}
        className={`px-4 py-2 rounded-xl transition cursor-pointer ${
          loop ? "bg-yellow-500 text-white" : "bg-gray-300 text-gray-700"
        }`}
      >
        🔁 {loop ? "On" : "Off"}
      </button>
    </div>
  );
};

export default PlayerControls;