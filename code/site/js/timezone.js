var Timezone = (function () {
  var globalTimezone = null;

  function Timezone () {
    if (globalTimezone)
      return globalTimezone;

    // Private
    var ready = false;

    // Public
    this.isReady = function () { return ready; };

    this.getAutocompleteStrings = function () {
      fixme('implement getAutocompleteStrings');
    }
    this.utcOffsetForString = function (str) {
      fixme('implement utcOffsetForString');
    }

    $.getJSON('js/timezones.json', function (data) {
      fixme('read and parse timezones json');
      ready = true;
    });

    globalTimezone = this;
    return this;
  }

  return Timezone;
})();
