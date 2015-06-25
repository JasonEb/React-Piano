var JukeBox = React.createClass({
  getInitialState: function(){
    return {
      tracks: TrackStore.all()
    }
  },

  _onChange: function () {
    console.log("_onChange hit");
    this.setState({
      tracks: TrackStore.all()
    });
    console.log(this.state.tracks);
  },

  componentDidMount: function () {
    TrackStore.addChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        Tracks
        <ul>
          {this.state.tracks.map(function(track, idx){
            return (
              <li>Track {idx + 1}</li>
            )
          })}
        </ul>
      </div>
    )
  }
});
