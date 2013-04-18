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

    // Initialization
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

    for (var i = 0; i < 24; i++) {
      var val = i > 12 ? i - 12 : i;
      var number = new Number (val);
      number.rotate(360 / 24 * i);
      el.append(number.el());
      numbers[i] = number;
    }

    return this;
  }

  function Number (val) {

    // Private
    var el = null;
    var textEl = null;
    var rotation = 0;

    // Public
    this.el = function () { return el; };

    this.rotate = function (deg) {
      el.css('transform', 'rotate(' + deg + 'deg)');
      textEl.css('transform', 'rotate(' + -deg + 'deg)');
    };

    // Initialization
    el = $('<div>').addClass('Number');
    textEl = $('<div>').addClass('NumberText').append(val);
    el.append(textEl);

    return this;
  }

  return Clock;
})();
