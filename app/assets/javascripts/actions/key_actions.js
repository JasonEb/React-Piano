KeyAction = {
  pressKey: function(keyData) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_PRESSED,
      key: keyData
    });
  },

  releaseKey: function(keyData){

  }
}
