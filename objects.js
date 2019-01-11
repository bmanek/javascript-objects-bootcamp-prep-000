var artist = 'artist name'

var playlist = { [artist] : 'song title' }

function updatePlaylist(obj, name, song) {
  return Object.assign({}, obj, {[name] : song});
}