angular
  .module('app')
  .controller('ListImagesController',ListImagesController);

ListImagesController.$inject = ['listImagesService','$rootScope','$scope'];

function ListImagesController(listImagesService, $rootScope, $scope){
  var lti = this;
  lti.url_galeria = $rootScope.dominio + $rootScope.imagenes+"fotos_galeria/";
	lti.url_galeria_p = $rootScope.dominio + $rootScope.imagenes+"styles/galeria/public/fotos_galeria/";
  lti.slides =[];
  lti.numberLoaded = false;
  lti.slickConfig = {
        enabled: true,
        autoplay: true,
        draggable: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll:4,
        method: {},

        event: {
            beforeChange: function (event, slick, currentSlide, nextSlide) {
            },
            afterChange: function (event, slick, currentSlide, nextSlide) {
            }
        },
        responsive: [
                   {
                     breakpoint: 1024,
                     settings: {
                       slidesToShow: 3,
                       slidesToScroll: 3,
                       infinite: true,
                       dots: true
                     }
                   },
                   {
                     breakpoint: 600,
                     settings: {
                       slidesToShow: 2,
                       slidesToScroll: 2
                     }
                   },
                   {
                     breakpoint: 480,
                     settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1
                     }
                   }
            ]

    };



  listImagesService.getListImages().then(function(data){
      lti.slides = data[0].field_fotos.und;
      lti.numberLoaded = true;
      /*setTimeout(function(){

        console.log("entre");
      },
      3000);*/
  });

}
