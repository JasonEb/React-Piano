$(document).on('keydown', function(e) {
  var note = keyMap[e.keyCode];
  KeyAction.pressKey(note);
});

$(document).on('keyup', function(e) {
  var note = keyMap[e.keyCode];
  KeyAction.releaseKey(note);
});
