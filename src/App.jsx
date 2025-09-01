import { useState } from "react";
import { Playlist } from "./LinkedList";
import PlaylistView from "./components/PlaylistView";
import PlayerControls from "./components/PlayerControls";
import NowPlaying from "./components/NowPlaying";

const playlist = new Playlist();

playlist.addSong({
  title: "Acoustic Breeze",
  url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
});

playlist.addSong({
  title: "Sunny Day",
  url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
});
playlist.addSong({
  title: "Inspire",
  url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
});

const App = () => {
  const [songs, setSongs] = useState(playlist.getAllSongs());
  const [currentSong, setCurrentSong] = useState(null);
  const [loop, setLoop] = useState(false);

  const removeSong = (title) => {
    playlist.removeSong(title);
    setSongs(playlist.getAllSongs());
  };

  const playSong = () => {
    const song = playlist.play();
    setCurrentSong(song);
  };

  const playNextSong = () => {
    const song = playlist.nextSong(loop);
    setCurrentSong(song);
  };

  const shuffleSong = () => {
    const song = playlist.shuffle();
    setCurrentSong(song);
  };

  return (
    <div className="bg-[url('/cloudy.jpg')] bg-cover bg-center flex flex-col items-center p-6 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <h1 className="text-4xl font-extrabold text-gray-300 mb-6 text-shadow">
        🎶 Linked List Playlist
      </h1>

      <PlaylistView songs={songs} removeSong={removeSong} />

      <NowPlaying currentSong={currentSong} />

      <PlayerControls
        playSong={playSong}
        nextSong={playNextSong}
        shuffleSong={shuffleSong}
        loop={loop}
        setLoop={setLoop}
      />
    </div>
  );
};

export default App;