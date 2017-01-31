angular
  .module("app")
  .controller('listBlogController',listBlogController);

  listBlogController.$inject =['listBlogService','$rootScope','$uibModal'];

  function listBlogController(listBlogService,$rootScope, $uibModal){
    var vm = this;
    vm.url_imagen = $rootScope.dominio + $rootScope.imagenes+"blog_principal/";
    vm.url_imagen_p =  $rootScope.dominio + $rootScope.imagenes+"styles/galeria/public/blog_principal/"
    vm.listBlog =[]
    vm.viewItemBlog = viewItemBlog;

    listBlogService.getListBlog().then(function(data){
        console.log(data);
      vm.listBlog = data;

    });

    function viewItemBlog(item) {
      var modalInstance = $uibModal.open({
            animation: true,
            templateUrl:'app/blog/viewItemBlog.html',
            controller:'viewItemBlogController',
            controllerAs:'itemBlog',
            size: 'lg',
            resolve: {
              data:{
                item:item,
              }
          }
      });

      modalInstance.result.then(function (selectedItem) {
          bootbox.alert("Estimado "+selectedItem+" su información fu enviada con exito");
        });
    }

  }
