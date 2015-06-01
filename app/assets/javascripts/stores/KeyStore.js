(function(root) {
  var _keys = {};

  root.KeyStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _keys;
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case KeyConstants.KEY_PRESSED:
          _keys[payload.key] = true;
          break;
        case KeyConstants.KEY_RELEASED:
          delete _keys[payload.key];
          break;
      }
    })
  });
})(this);
