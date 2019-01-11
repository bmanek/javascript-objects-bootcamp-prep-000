var artist = 'artist name'

var playlist = {}

function updatePlaylist(obj, name, song) {
  return Object.assign({}, obj, {[name] : song});
}