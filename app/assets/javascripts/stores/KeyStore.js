(function(root) {
  var _keys = {};
  var CHANGE_EVENT = 'change';

  root.KeyStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _keys;
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case KeyConstants.KEY_PRESSED:
          _keys[payload.key] = payload.key;
          KeyStore.emit(CHANGE_EVENT);
          break;
        case KeyConstants.KEY_RELEASED:
          delete _keys[payload.key];
          KeyStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

  KeyStore.setMaxListeners(50);
})(this);
