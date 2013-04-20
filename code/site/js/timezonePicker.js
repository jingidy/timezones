var TimezonePicker = (function () {

  function TimezonePicker (timezoneChangedCb) {

    // Private
    var el = null;
    var utcOffset = 0;
    var timezone = new Timezone(timezoneLoaded);

    function timezoneLoaded () {
      $('.TimezonePicker').typeahead({
        source: timezone.getAutocompleteStrings,
        updater: timezoneDidChange
      });
      fixme('Remove loading indicator');
    }

    function timezoneDidChange (name) {
      utcOffset = timezone.utcOffsetForName(name);
      if (timezoneChangedCb)
        timezoneChangedCb();
      return name;
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
    el.attr('autocomplete', 'off');
    fixme('Show loading icon until timezone finishes loading')
    return this;
  }

  return TimezonePicker;
})();
