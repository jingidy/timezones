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

    el = $('<div>').addClass('Clock');
    el.css({
      'width': diameter + 'px',
      'height': diameter + 'px'
    });

    // Add the PM shadow
    var night = $('<div>').addClass('Night');
    night.css('line-height', diameter - 40 + 'px');
    night.append('PM');
    el.append(night);

    fixme('Generate numbers for clock face');

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
