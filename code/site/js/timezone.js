var Timezone = (function () {
  var globalTimezone = null;

  function Timezone (readyCb) {
    if (globalTimezone)
      return globalTimezone;

    // Private
    var ready = false;
    var str2utcOffset = {};
    var utcOffset2str = {};

    function notReady () { err('Timezone data not yet loaded'); }

    // Public
    this.isReady = function () { return ready; };

    this.getAutocompleteStrings = function () {
      if (!ready) return notReady();
      return Object.keys(str2utcOffset);
    }
    this.utcOffsetForString = function (str) {
      if (!ready) return notReady();
      fixme('implement utcOffsetForString');
    }

    $.getJSON('js/timezones.json', function (data) {
      $.each(data, function (index, zone) {
        var code = zone.code;
        var name = zone.name;
        var offset = parseFloat(zone.utcOffset);

        var fullName = name + ' (' + code + ')';
        str2utcOffset[fullName] = offset;
        utcOffset2str[offset.toString()] = fullName;
      });

      ready = true;

      if (readyCb)
        readyCb();
    });

    globalTimezone = this;
    return this;
  }

  return Timezone;
})();
