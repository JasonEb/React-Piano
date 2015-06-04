KeyAction = {
  pressKey: function(keyData) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_PRESSED,
      key: keyData
    });
  },

  releaseKey: function(keyData){
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_RELEASED,
      key: keyData
    });
  },

  setKeys: function(keys){
    AppDispatcher.dispatch({
      actionType: KeyConstants.SET_KEYS,
      keys: keys
    });
  }
};
