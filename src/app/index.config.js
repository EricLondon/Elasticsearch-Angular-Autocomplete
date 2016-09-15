(function() {
  'use strict';

  angular
    .module('elasticsearchAutocomplete')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
