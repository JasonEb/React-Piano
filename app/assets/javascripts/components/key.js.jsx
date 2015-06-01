var Key = React.createClass({
  getInitialState:function () {
    return { notes: KeyStore.all()}
  },
  _onChange: function () {
    var notes = this.state.notes;
    var key = this.props.noteName;
    if (notes[key]) {
      this.note.start();
    } else {
      this.note.stop();
    }
  },
  componentDidMount: function (){
    var freq = Tones[this.props.noteName];
    this.note = new Note(freq);
    KeyStore.addChangeListener(this._onChange);
  },
  render: function(){
    return(
      <div className="key">
        KEY
      </div>
    )
  }
})
