(function() {
  'use strict';

  angular
    .module('elasticsearchAutocomplete')
    .factory('PersonAutocomplete', PersonAutocomplete);

  /** @ngInject */
  function PersonAutocomplete($http, $log) {
    var apiHost = 'http://localhost:3000';

    var service = {
      apiHost: apiHost,
      search: search
    };

    return service;

    function search(q) {
      q = q || ''
      return $http.get(apiHost + '/api/people/auto_complete?q=' + q)
        .then(searchSuccess)
        .catch(searchFailure);

      function searchSuccess(response) {
        if (!response.data) return [];
        return response.data;
      }

      function searchFailure(error) {
        $log.error('XHR Failed.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
