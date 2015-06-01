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
    removeChangeListenger: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case KeyConstants.KEY_PRESSED:
          _keys[payload.key] = true;
          KeyStore.emit(CHANGE_EVENT);
          break;
        case KeyConstants.KEY_RELEASED:
          delete _keys[payload.key];
          KeyStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
