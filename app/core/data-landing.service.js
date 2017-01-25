angular
  .module('app')
  .factory('dataLandingService',dataLandingService);

dataLandingService.$inject = ['$http','$rootScope'];

function dataLandingService($http, $rootScope){
    return{
      getConfingLanding : getConfingLanding
    };

    function getConfingLanding(){
        return $http.get($rootScope.url+'paginas/'+$rootScope.landing_id)
                    .then(getConfingLandingComplete)
                    .catch(getConfingLandingFailed);
        function getConfingLandingComplete(response){
            return response.data;
        }
        function getConfingLandingFailed(error){
            //logger.error('XHR Failed for getContentHtml.' + error.data);
            console.log(error);
        }

    }

}
