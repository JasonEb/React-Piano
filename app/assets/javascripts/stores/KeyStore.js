(function(root) {
  var _keys = {};
  var CHANGE_EVENT = 'change';

  _resetKeys = function(keys){

    _keys = $.extend({}, keys);
  };

  root.KeyStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return JSON.parse(JSON.stringify(_keys));
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
          if (!_keys[payload.key]) {
            console.log(payload.key);
            _keys[payload.key] = payload.key;
            KeyStore.emit(CHANGE_EVENT);
          }
          break;
        case KeyConstants.KEY_RELEASED:
          if (_keys[payload.key]) {
            delete _keys[payload.key];
            KeyStore.emit(CHANGE_EVENT);
          }
          break;
        case KeyConstants.SET_KEYS:
          _resetKeys(payload.keys);
          KeyStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

  KeyStore.setMaxListeners(50);
})(this);
