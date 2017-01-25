angular
  .module('app')
  .controller('ViewContentController', ViewContentController);

ViewContentController.$inject = ['viewContentService'];

function ViewContentController(viewContentService){
  var vm = this;
  vm.paginas =[];


  getPaginasLanding();

  function getPaginasLanding(){
    viewContentService.getContentHtml().then(function(data){
        vm.paginas = data;
        return vm.paginas;
    });
  }
}
