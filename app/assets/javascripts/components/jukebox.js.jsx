var JukeBox = React.createClass({
  getInitialState: function(){
    return {
      tracks: TrackStore.all(),
      currentTrack: 10
    }
  },

  _onChange: function () {
    this.setState({
      tracks: TrackStore.all(),
    });
  },

  componentDidMount: function () {
    TrackStore.addChangeListener(this._onChange);
  },

  handleClick: function(){
    debugger;
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

        <div className="trackplayer">
          <TrackPlayer currentTrack={this.state.currentTrack} />
        </div>

      </div>
    )
  }
});
