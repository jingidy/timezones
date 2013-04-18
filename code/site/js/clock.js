var Clock = (function () {

  function Clock (diameter) {
    // Private
    var el = null;
    var numbers = [];
    var timezonePicker = new TimezonePicker ();

    // Public
    this.el = function () { return el; };
    this.timezonePicker = function () { return timezonePicker; };

    this.setTime = function (hours, minutes) {
      fixme('Implement setTime');
    };

    fixme('Implement Clock constructor');
    return this;
  }

  function Number (val) {

    // Private
    var el = null;

    // Public
    this.el = function () { return el; };

    fixme('Implement Number constructor');
    return this;
  }

  return Clock;
})();
