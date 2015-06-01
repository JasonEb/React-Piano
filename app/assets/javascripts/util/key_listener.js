$(document).on('keypress', function(e) {
  var note = keyMap[e.keyCode];
  KeyAction.pressKey(note);
});
