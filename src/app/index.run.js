(function() {
  'use strict';

  angular
    .module('elasticsearchAutocomplete')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
