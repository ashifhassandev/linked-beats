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
    const newSong = new Node(song);

    if (!this.head) {
      this.head = newSong;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newSong;
  }

  play() {
    if (!this.head) return null;

    this.current = this.head;
    return this.current.song;
  }
}
