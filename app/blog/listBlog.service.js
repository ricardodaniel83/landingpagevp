angular
  .module('app')
  .factory('listBlogService',listBlogService);

  listBlogService.$inject =['$http','$rootScope'];
  function listBlogService($http, $rootScope){
    return {
      getListBlog : getListBlog
    }

    function getListBlog(){
      return $http.post($rootScope.url+'paginas/'+$rootScope.landing_id+'/'+'blog',
                    { runa:'123'},
                    {headers: {'Content-Type': 'application/json'}
                  })
                  .then(getContentHtmlComplete)
                  .catch(getContentHtmlFailed);

      function getContentHtmlComplete(response){
          return response.data;
      }
      function getContentHtmlFailed(error){
          //logger.error('XHR Failed for getContentHtml.' + error.data);
          console.log(error);
      }
    }
  }
