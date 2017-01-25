angular
  .module('app')
  .run(setVariables);

setVariables.$inject = ['$rootScope'];

function setVariables($rootScope){
    $rootScope.landing_id = 1;
    $rootScope.dominio ='http://greenwash.com.ec';
    $rootScope.api ='/landing_page/app/api/';
    $rootScope.imagenes = '/landing_page/sites/default/files/'
    $rootScope.url =$rootScope.dominio + $rootScope.api;
}
