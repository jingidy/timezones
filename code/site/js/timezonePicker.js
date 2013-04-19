var TimezonePicker = (function () {

  function TimezonePicker () {

    // Private
    var el = null;
    var utcOffset = 0;
    var timezone = new Timezone();

    // Public
    this.el = function () { return el; };
    this.utcOffset = function () { return utcOffset; };
    
    this.setUTCOffset = function (offset) {
      fixme('Implement setUTCOffset');
    };
    
    this.setTimzeoneByName = function (name) {
      fixme('Implement setTimzeoneByName');
    };

    fixme('Implement TimzeonePicker Constructor')
    return this;
  }

  return TimezonePicker;
})();
