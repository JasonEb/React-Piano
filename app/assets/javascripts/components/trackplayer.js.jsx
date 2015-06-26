var TrackPlayer = React.createClass({
  getInitialState: function(){
    return { currentTrack: ""}
  },
  render: function () {
    return (
      <div>CurrentTrack: {this.props.currentTrack + 1}</div>
    )
  }
});
