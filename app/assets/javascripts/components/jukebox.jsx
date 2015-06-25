var JukeBox = React.createClass({
  getInitialState: function(){
    return {
      tracks: TrackStore.all()
    }
  },

  render: function() {
    return (
      <div>
        Tracks
        <ul>
          {this.state.tracks.map(function(track, idx){
            return (
              <li>Track {idx}</li>
            )
          })}
        </ul>
      </div>
    )
  }
});
