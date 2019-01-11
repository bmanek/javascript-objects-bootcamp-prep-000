var playlist = {"Nine Inch Nails" : "Closer"};

function updatePlaylist(obj, name, song) {
  return Object.assign({}, obj, {[name] : song});
}