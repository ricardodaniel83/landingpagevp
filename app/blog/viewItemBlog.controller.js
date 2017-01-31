angular
  .module('app')
  .controller('viewItemBlogController',viewItemBlogController);
  viewItemBlogController.$inject=['$uibModalInstance', 'data','$rootScope']
  function viewItemBlogController($uibModalInstance, data, $rootScope){
    var itemBlog = this;
    itemBlog.url_imagen = $rootScope.dominio + $rootScope.imagenes+"blog_principal/";
    itemBlog.url_imagen_p =  $rootScope.dominio + $rootScope.imagenes+"styles/galeria/public/blog_principal/"
    itemBlog.data = data.item;
    itemBlog.close = close;
    console.log(itemBlog.data);
    function close(){
      $uibModalInstance.dismiss('cancel');
    }


  }
