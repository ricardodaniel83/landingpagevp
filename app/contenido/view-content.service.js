angular
  .module('app')
  .factory('viewContentService',viewContentService);

viewContentService.$inject = ['$http','$rootScope'];

function viewContentService($http, $rootScope){
    return{
      getContentHtml : getContentHtml
    };

    function getContentHtml(){
        return $http.post($rootScope.url+'paginas/'+$rootScope.landing_id+'/'+'secciones',
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
