angular
  .module('app')
  .controller('DataLandingController', DataLandingController)

DataLandingController.$inject = ['dataLandingService','$rootScope']

function DataLandingController(dataLandingService, $rootScope){
  var vm = this;
  vm.landing =[];
  vm.logo ="";
  llenarDatos();
  function llenarDatos(){
    dataLandingService.getConfingLanding().then(function(data){
                 vm.landing = data;
                 vm.logo =  $rootScope.dominio + $rootScope.imagenes + "logos/" + vm.landing.field_logo.und[0].filename;
                 return vm.landing;
               });
  }


}
