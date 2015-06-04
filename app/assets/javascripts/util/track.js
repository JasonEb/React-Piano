!function() {
  Track = function(name, roll) {
    this.name = name;
    this.roll = roll || [];
    // this.hashRoll = {};
  };

  Track.prototype.record = function () {
    this.beginningTime = Date.now();
    console.log("Begin Recording");
  };

  Track.prototype.stop = function () {
    console.log("End Recording");

    var timeSlice = Date.now() - this.beginningTime;
    var entry = {time: timeSlice, notes: {}};
    this.roll.push(entry);
  };

  Track.prototype.addNotes = function (hashNotes) {
    var timeSlice = Date.now() - this.beginningTime;
    var entry = {time: timeSlice, notes: hashNotes};

    this.roll.push(entry);
  };

}();
