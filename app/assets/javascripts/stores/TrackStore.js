(function(root) {
  var _tracks = [];
  var CHANGE_EVENT = 'change';

  var resetTracks = function(tracks) {
    _tracks = tracks;
  };

  root.TrackStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _tracks.slice();
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case TrackConstants.CLIENT_SAVE_TRACK:
          _tracks.push(payload.track);
          TrackStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
