var TimezonePicker = (function () {

  function TimezonePicker () {

    // Private
    var el = null;
    var utcOffset = 0;
    var timezone = new Timezone(timezoneLoaded);

    function timezoneLoaded () {
      fixme('Implement timezoneLoaded');
    }

    // Public
    this.el = function () { return el; };
    this.utcOffset = function () { return utcOffset; };
    
    this.setUTCOffset = function (offset) {
      fixme('Implement setUTCOffset');
    };
    
    this.setTimzeoneByName = function (name) {
      fixme('Implement setTimzeoneByName');
    };

    el = $('<input type="text">').addClass('TimezonePicker');
    fixme('Show loading icon until timezone finishes loading')
    return this;
  }

  return TimezonePicker;
})();
