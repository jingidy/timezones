var Timezone = (function () {
  var globalTimezone = null;

  function Timezone (readyCb) {
    if (globalTimezone)
      return globalTimezone;

    // Private
    var ready = false;
    var str2utcOffset = {};
    var utcOffset2str = {};
    var autocompleteStrings = null;

    function notReady () { err('Timezone data not yet loaded'); }

    // Public
    this.isReady = function () { return ready; };

    this.getAutocompleteStrings = function () {
      if (!ready) return notReady();
      if (!autocompleteStrings)
        autocompleteStrings = Object.keys(str2utcOffset);
      return autocompleteStrings;
    }
    this.utcOffsetForName = function (name) {
      if (!ready) return notReady();
      return str2utcOffset[name];
    }
    this.nameForUTCOffset = function (offset) {
      if (!ready) return notReady();
      return utcOffset2str[offset.toString()];
    }

    $.getJSON('js/timezones.json', function (data) {
      $.each(data, function (index, zone) {
        var code = zone.code;
        var name = zone.name;
        var offset = parseFloat(zone.utcOffset);

        var fullName = code + ' - ' + name;
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
