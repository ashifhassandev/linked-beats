class Node {
  constructor(song) {
    this.song = song;
    this.next = null;
  }
}

export class Playlist {
  constructor() {
    this.head = null;
    this.current = null;
  }

  addSong(song) {
    const newNode = new Node(song);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  play() {
    if (!this.head) return null;

    this.current = this.head;
    return this.current.song;
  }

  nextSong(loop = false) {
    if (this.current && this.current.next) {
      this.current = this.current.next;
      return this.current.song;
    } else if (loop && this.head) {
      this.current = this.head;
      return this.current.song;
    }

    return null;
  }

  removeSong(title) {
    if (!this.head) return;

    if (this.head.song.title === title) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.song.title === title) {
        current.next = current.next.next;
        return;
      }

      current = current.next;
    }
  }

  getAllSongs() {
    let current = this.head;
    const songs = [];

    while (current) {
      songs.push(current.song);
      current = current.next;
    }

    return songs;
  }

  getRandomSong(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) return current;
      current = current.next;
      count++;
    }

    return null;
  }

  shuffle() {
    const songs = this.getAllSongs();

    if (songs.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * songs.length);
    this.current = this.getRandomSong(randomIndex);
    return this.current.song;
  }
}