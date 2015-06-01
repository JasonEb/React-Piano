(function(root) {
  var _notes = [];

  root.KeyStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _notes.slice();
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case KEY_PRESSED:
          break;
      }
    })
  });
})(this);
