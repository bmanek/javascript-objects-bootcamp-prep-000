var playlist = {"Nine Inch Nails" : "Closer"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName] : songTitle});
}