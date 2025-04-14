const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },


printPlaylists: function() {
  for (const id in this.playlists) {
    const playlist = this.playlists[id];
    console.log(`${id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  }
},

printTracks: function() {
    for (const id in this.tracks) {
      const track = this.tracks[id];
      console.log(`${id}: ${track.name} by ${track.artist} (${track.album})`);
    }
},

  printPlaylist: function(id) {
    const playlist = this.playlists[id];
    if (playlist) {
      console.log(`${id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
      for (const trackId of playlist.tracks) {
        const track = this.tracks[trackId];
        console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
      }
    } else {
      console.log(`Playlist with ID ${id} not found.`);
    }
  },


  addTrackToPlaylist: function(t_id, p_id) {
    if (this.playlists[p_id] && this.tracks[t_id]) {
      this.playlists[p_id].tracks.push(t_id);
    } else {
      console.log(`Track ID ${t_id} or Playlist ID ${p_id} does not exist.`);
    }
  },

  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function(name, artist, album) {
    const id = this.generateUid();
    this.tracks[id] = { id, name, artist, album };
  },

  addPlaylist: function(name) {
    const id = this.generateUid();
    this.playlists[id] = { id, name, tracks: [] };
  }




};