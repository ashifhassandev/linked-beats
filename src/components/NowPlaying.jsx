const NowPlaying = ({ currentSong }) => {
  return (
    <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 w-96 mb-6 text-center">
      {currentSong ? (
        <>
          <h3 className="text-lg font-bold text-indigo-600">Now Playing 🎧</h3>
          <p className="text-gray-700 mt-1">{currentSong.title}</p>
          <audio
            controls
            src={currentSong.url}
            className="mt-3 w-full rounded-lg"
          />
        </>
      ) : (
        <p className="text-gray-500 italic">No song is playing</p>
      )}
    </div>
  );
};

export default NowPlaying;