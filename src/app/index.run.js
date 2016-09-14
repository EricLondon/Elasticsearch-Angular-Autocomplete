(function() {
  'use strict';

  angular
    .module('esAutocomplete')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
