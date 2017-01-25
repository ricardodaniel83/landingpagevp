angular
  .module('app')
  .controller('ListImagesController',ListImagesController);

ListImagesController.$inject = ['listImagesService','$rootScope'];

function ListImagesController(listImagesService, $rootScope){
  var vm = this;
  vm.galeria =[];
  vm.url_galeria = $rootScope.dominio + $rootScope.imagenes+"fotos_galeria/";
	vm.url_galeria_p = $rootScope.dominio + $rootScope.imagenes+"styles/galeria/public/fotos_galeria/";

  getGaleria();
  function getGaleria(){
    listImagesService.getListImages().then(function(data){
        vm.galeria = data[0].field_fotos.und;
        
        return vm.galeria;
    });
  }

}
