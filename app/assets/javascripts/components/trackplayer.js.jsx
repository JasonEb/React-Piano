var TrackPlayer = React.createClass({
  getInitialState: function(){
    return { currentTrack: "null"}
  },
  render: function () {
    return (
      <div className="trackplayer">
        CurrentTrack: {this.props.currentTrack + 1}
        <button onClick={this.handleClickPlay}>Play</button>
        <button onClick={this.handleClickDelete}>Delete</button>
      </div>
    )
  }
});
