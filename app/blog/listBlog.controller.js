angular
  .module("app")
  .controller('listBlogController',listBlogController);

  listBlogController.$inject =['listBlogService','$rootScope'];

  function listBlogController(listBlogService,$rootScope){
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
      console.log(item);
    }

  }
