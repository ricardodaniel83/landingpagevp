angular
  .module('app')
  .controller('ListImagesController',ListImagesController);

ListImagesController.$inject = ['listImagesService','$rootScope'];

function ListImagesController(listImagesService, $rootScope){
  var vm = this;
  vm.url_galeria = $rootScope.dominio + $rootScope.imagenes+"fotos_galeria/";
	vm.url_galeria_p = $rootScope.dominio + $rootScope.imagenes+"styles/galeria/public/fotos_galeria/";
  vm.myInterval = 5000;
  vm.noWrapSlides = true;
  vm.active = 0;
  vm.slides =[];

  listImagesService.getListImages().then(function(data){
      vm.slides = data[0].field_fotos.und;

  });

}
