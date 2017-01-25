function initialize() {
    var styleArray = [
      {
        featureType: 'all',
        stylers: [
          { saturation: -80 }
        ]
      },{
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          { hue: '#00ffee' },
          { saturation: 50 }
        ]
      },{
        featureType: 'poi.business',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      }
    ];
     var myLatLng = {lat:-0.156443, lng: -78.4916926};
    var mapOptions = {
      zoom: 18,
      center: myLatLng,
      styles: styleArray
    };

    var map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
    var marker = new google.maps.Marker({
                        position: myLatLng,
                          map: map,
                          label: 'VAPEVENTOS'
                    });
}

google.maps.event.addDomListener(window, 'load', initialize);
