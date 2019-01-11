var playlist = {"Nine Inch Nails" : "Closer", "Slowdive" : "Alison", "My Bloody Valentine" : ""};

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {[artistName] : songTitle});
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}