TrackAction = {
  //this is only for API call
  receiveAll: function(tracksData){
    AppDispatcher.dispatch({
      actionType: TrackConstants.TRACKS_RECEIVED,
      tracks: tracksData
    });
  },

  receiveTrack: function(trackData){
    AppDispatcher.dispatch({
      actionType: TrackConstants.RECEIVE_TRACK,
      track: trackData
    });
  }
};
