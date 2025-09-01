const PlaylistView = ({ songs, removeSong }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 w-96 mb-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Playlist</h2>

      {songs.length === 0 ? (
        <p className="text-gray-500 italic">No songs yet</p>
      ) : (
        <ul className="space-y-2">
          {songs.map((song, i) => (
            <li
              key={i}
              className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50"
            >
              <span className="text-gray-800">{song.title}</span>
              <button
                onClick={() => removeSong(song.title)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-sm rounded-lg transition cursor-pointer"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlaylistView;