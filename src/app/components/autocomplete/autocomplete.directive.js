(function() {
  'use strict';

  angular
    .module('elasticsearchAutocomplete')
    .directive('autocomplete', autocomplete);

  /** @ngInject */
  function autocomplete() {
    var directive = {
      bindToController: true,
      controller: AutocompleteController,
      controllerAs: 'vm',
      link: autocompleteLink,
      restrict: 'E',
      templateUrl: 'app/components/autocomplete/autocomplete.html'
    };

    return directive;

    /** @ngInject */
    function AutocompleteController($timeout, PersonAutocomplete) {
      var vm = this;
      vm.timeout = $timeout;

      var reset = function() {
        vm.autocompleteResults = [];
        vm.clickedResult = undefined;
        vm.hasAutocompleteResults = false;
        vm.q = undefined;
      }

      reset();

      vm.autocompleteResultClick = function(result) {
        vm.clickedResult = JSON.stringify(result, null, 2);
      }

      vm.clearSearch = function() {
        reset();
      }

      vm.search = function() {
        PersonAutocomplete.search(vm.q).then(function(response){
          vm.clickedResult = undefined;
          vm.autocompleteResults = response;
          vm.hasAutocompleteResults = vm.autocompleteResults.length > 0;
        });
      }
    }

    function autocompleteLink(scope, element, attrs, vm) {
      var autocompleteTimer = undefined;

      var keyPressed = function(event) {
        if (autocompleteTimer) {
          vm.timeout.cancel(autocompleteTimer);
        }

        autocompleteTimer = vm.timeout(function() {
          vm.search();
        }, 500);
      }

      var inputField = element.find('input#search-q');
      inputField.on('keyup', keyPressed);
    }
  }

})();
