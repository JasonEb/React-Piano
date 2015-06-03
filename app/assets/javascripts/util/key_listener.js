$(document).on('keydown', function(e) {
  var qwertyKey = qwertyKeyMap[e.keyCode];
  var note = keyMap[qwertyKey];
  console.log(e.keyCode);

  KeyAction.pressKey(note);
});

$(document).on('keyup', function(e) {
  var qwertyKey = qwertyKeyMap[e.keyCode];
  var note = keyMap[qwertyKey];

  KeyAction.releaseKey(note);
});
