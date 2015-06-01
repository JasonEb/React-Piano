var Key = React.createClass({
  getInitialState:function () {
    return { notes: KeyStore.all(), color: '#D3D3D3' }
  },
  _onChange: function () {
    var notes = this.state.notes;
    var key = this.props.noteName;
    if (notes[key]) {
      this.note.start();
      this.setState({'color' : 'white'});
    } else {
      this.note.stop();
      this.setState({'color' : '#D3D3D3'});
    }
  },
  componentDidMount: function (){
    var freq = Tones[this.props.noteName];
    this.note = new Note(freq);
    KeyStore.addChangeListener(this._onChange);
  },
  render: function(){
    return(
      <div className="key" style={{'backgroundColor': this.state.color}}>
        <div className="note"><p>{this.props.noteName}</p></div>
        <div className="qwertyKey"><p>{this.props.qwertyKey}</p></div>
      </div>
    )
  }
})
