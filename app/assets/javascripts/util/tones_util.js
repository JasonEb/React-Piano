var Tones = {
  "C0" : 16.35,
  "C#" : 17.32,
  "D0" : 18.35,
  "E0"  : 20.60,
  "Eb0": 19.45,
  "F0" : 21.83,
  "F#0": 23.12,
  "G0" : 24.50,
  "G#0": 25.96,
  "A0" : 27.50,
  "Bb0": 29.14,
  "B0" : 30.87
}

//make octaves now
var notes = ['C','C#','D','Eb','E','F','F#','G','G#','A','Bb','B'];

notes.forEach(function(note){
  for(var i = 1; i <= 8; i++){
    var nextNote = note + i;
    var prevNote = note + (i - 1);
    Tones[nextNote] = Tones[prevNote] * 2;
  }
});
