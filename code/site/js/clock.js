var Clock = (function () {

  function Clock (diameter) {
    // Private
    var el = null;
    var numbers = [];
    var night = null;
    var timezonePicker = new TimezonePicker (timezoneDidChange);

    function rotateNumbersWithOffset (offsetDeg) {
      var numbersCount = numbers.length;
      for (var i = 0; i < numbersCount; i++)
        numbers[i].rotate(360 / numbersCount * i + offsetDeg);
    }

    function updateNightShadowRotation () {
      var noonRotation = numbers[12].getRotation();
      night.css('transform', 'rotate(' + (noonRotation + 83) + 'deg)');
    }

    function timezoneDidChange () {
      fixme('implement timezoneDidChange');
    }

    // Public
    this.el = function () { return el; };
    this.timezonePicker = function () { return timezonePicker; };

    this.setTime = function (hours, minutes) {
      var fraction = (hours + minutes / 60) / numbers.length;
      var rotation = -fraction * 360;
      rotateNumbersWithOffset(rotation);
      updateNightShadowRotation();
    };

    // Initialization
    el = $('<div>').addClass('Clock');
    el.css({
      'width': diameter + 'px',
      'height': diameter + 'px'
    });

    var clockFace = $('<div>').addClass('ClockFace');
    el.append(clockFace);

    for (var i = 0; i < 24; i++) {
      var val = i > 12 ? i - 12 : i;
      var number = new Number (val);
      clockFace.append(number.el());
      numbers[i] = number;
    }
    rotateNumbersWithOffset(0);

    // Add the PM shadow
    night = $('<div>').addClass('Night');
    night.css('line-height', diameter - 40 + 'px');
    night.append('PM');
    updateNightShadowRotation();
    clockFace.append(night);

    el.append(timezonePicker.el());

    return this;
  }

  function Number (val) {

    // Private
    var el = null;
    var textEl = null;
    var rotation = 0;

    // Public
    this.el = function () { return el; };
    this.getRotation = function () { return rotation; };

    this.rotate = function (deg) {
      el.css('transform', 'rotate(' + deg + 'deg)');
      textEl.css('transform', 'rotate(' + -deg + 'deg)');
      rotation = deg;
    };

    // Initialization
    el = $('<div>').addClass('Number');
    textEl = $('<div>').addClass('NumberText').append(val);
    el.append(textEl);

    return this;
  }

  return Clock;
})();
