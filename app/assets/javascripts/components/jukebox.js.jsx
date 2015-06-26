var JukeBox = React.createClass({
  getInitialState: function(){
    return {
      tracks: TrackStore.all(),
      currentTrack: -1
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

  handleClick: function(event){
    var currentTrackIdx = parseInt(event.currentTarget.children[1].innerHTML) - 1;
    this.setState({currentTrack: currentTrackIdx});
  },

  render: function() {
    return (
      <div>
        Tracks
        <ul>
          {this.state.tracks.map(function(track, idx){
            return (
              <li key={idx} onClick={this.handleClick}>Track {idx + 1}</li>
            )
          }.bind(this))}
        </ul>

        <div className="trackplayer">
          <TrackPlayer currentTrack={this.state.currentTrack} />
        </div>

      </div>
    )
  }
});
