var Reader = React.createClass({
  _onChange: function () {
    var notes = KeyStore.all();
    this.recording.addNotes(notes);
  },
  _playEntry: function(notes) {
    KeyAction.setKeys(notes);
  },
  startRecording: function () {
    this.recording.record();
    this.resetRecording();
    KeyStore.addChangeListener(this._onChange);
  },

  stopRecording: function () {
    KeyStore.removeChangeListener(this._onChange);
    this.recording.stop();
  },

  resetRecording: function () {
    this.recording.roll = [];
    clearInterval(this.timerID);
  },

  playRecording: function () {
    var that = this;
    var beginningTime = Date.now();
    var elapsedTime = 0;
    var slices = this.recording.roll.slice();
    var nextSlice = slices.shift();

    console.log("begin recording");

    this.timerID = setInterval( function(){
      if (slices.length === 0) {
        console.log("finish recording");
        clearInterval(this.timerID);
      } else {
        elapsedTime = Date.now() - beginningTime;
        if (nextSlice.time <= elapsedTime){
          console.log(nextSlice.notes);
          this._playEntry(nextSlice.notes);
          nextSlice = slices.shift();
        }
    }


    }.bind(this), 1);
  },

  componentDidMount: function (){
    this.recording = new Track("text");
  },
  render: function () {
    return (
      <span>
        <input>Input message</input>
        <input type="submit"></input>
      </span>
    )
  }
});
