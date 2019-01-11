var playlist = { 'artist name' : 'song title' }

function updatePlaylist(obj, name, song) {
  return Object.assign({}, obj, {[name] : song});

}