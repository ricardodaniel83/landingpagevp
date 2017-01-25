angular
  .module('app')
  .factory('listImagesService',listImagesService);

listImagesService.$inject = ['$http','$rootScope'];

function listImagesService($http, $rootScope){
  return{
    getListImages: getListImages
  };

  function getListImages(){
      return $http.post($rootScope.url+'paginas/'+$rootScope.landing_id+'/'+'galerias',
                    {runa:'123'},
                    {headers: {'Content-Type': 'application/json'}
                  })
                  .then(getListImagesComplete)
                  .catch(getListImagesFailed);

      function getListImagesComplete(response){
          return response.data;
      }
      function getListImagesFailed(error){
          //logger.error('XHR Failed for getContentHtml.' + error.data);
          console.log(error);
      }
  }

}
