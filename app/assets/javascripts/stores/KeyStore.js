(function(root) {
  var _keys = [];

  root.KeyStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _keys.slice();
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case KeyConstants.KEY_PRESSED:
          _keys.push(payload.key);
          break;
      }
    })
  });
})(this);
