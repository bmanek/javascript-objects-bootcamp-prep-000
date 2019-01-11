var playlist = {"Nine Inch Nails" : "Closer"};

function updatePlaylist(playlist, artistName, songtitle) {
  return Object.assign({}, playlist, {[artistName] : songtitle});
}