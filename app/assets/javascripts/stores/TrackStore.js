(function(root) {
  var _tracks = [];

  root.TrackStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _tracks.slice();
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case TrackConstants.RECEIVE_TRACK:
          _tracks.push(payload.track);
          break;
      }
    })
  });
})(this);
