angular
  .module('app')
  .controller('ViewContentController', ViewContentController);

ViewContentController.$inject = ['viewContentService'];

function ViewContentController(viewContentService){
  var vm = this;
  vm.paginas =[];
  vm.contactenos = contactenos;


  getPaginasLanding();

  function getPaginasLanding(){
    viewContentService.getContentHtml().then(function(data){
        vm.paginas = data;
        console.log(data);
        return vm.paginas;
    });
  }

  function contactenos(){
      alert("Entre");
  }
}
