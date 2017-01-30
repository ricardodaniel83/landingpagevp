angular
  .module('app')
  .factory('viewFromContactenosService',viewFromContactenosService);

viewFromContactenosService.$inject = ['$http','$rootScope'];

function viewFromContactenosService($http, $rootScope){
  return{
    submitDataForm: submitDataForm
  };

  function submitDataForm(datos,tipo){
      return $http.post($rootScope.url+'paginas/'+$rootScope.landing_id+'/'+'formularios',
                    {landing_id:$rootScope.landing_id, tipo: tipo, data: datos, runa:'123'},
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
