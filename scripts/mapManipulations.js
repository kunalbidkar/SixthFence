
      var map;
      var graphic;
      var currLocation;
      var watchId;
      require([
        "esri/map", "esri/geometry/Point", "esri/layers/GraphicsLayer",
        "esri/symbols/SimpleMarkerSymbol", "esri/symbols/SimpleLineSymbol",
        "esri/graphic", "esri/Color", "dojo/domReady!"
      ], function(
        Map, Point, GraphicsLayer,
        SimpleMarkerSymbol, SimpleLineSymbol,
        Graphic, Color
      ) {
        map = new Map("map", {
          basemap: "streets",
          center: [-85.957, 17.140],
          zoom: 2
        });

          var graphicsLayer;

        map.on("load", initFunc);

        graphicsLayer = new GraphicsLayer();
        function orientationChanged() {
          if(map){

            //map.addLayer(graphicsLayer);
            map.reposition();
            map.resize();
          }
        }

        function initFunc(map) {
          if( navigator.geolocation ) {  
            navigator.geolocation.getCurrentPosition(zoomToLocation, locationError);
            console.log(navigator.geolocation.getCurrentPosition(zoomToLocation, locationError));
            watchId = navigator.geolocation.watchPosition(showLocation, locationError);
            console.log('The watch Id is ', watchId);
          } else {
            alert("Browser doesn't support Geolocation. Visit http://caniuse.com to see browser support for the Geolocation API.");
          }
        }

        function locationError(error) {
          //error occurred so stop watchPosition
          if( navigator.geolocation ) {
            navigator.geolocation.clearWatch(watchId);

          }
          switch (error.code) {
            case error.PERMISSION_DENIED:
              alert("Location not provided");
              break;

            case error.POSITION_UNAVAILABLE:
              alert("Current location not available");
              break;

            case error.TIMEOUT:
              alert("Timeout");
              break;

            default:
              alert("unknown error");
              break;
          }
        }

        function zoomToLocation(location) {
          var pt = new Point(location.coords.longitude, location.coords.latitude);
          addGraphic(pt);
          //graphicsLayer.add(pt);
          map.centerAndZoom(pt, 12);
        }

        function showLocation(location) {
          //zoom to the users location and add a graphic
          var pt = new Point(location.coords.longitude, location.coords.latitude);
          if ( !graphic ) {
            addGraphic(pt);
          } else { // move the graphic if it already exists
            graphic.setGeometry(pt);
            
            console.log('The geometry changed is ', pt.x, 'and ', pt.y);
             map.infoWindow.setContent('Your latitude is '+pt.x+ ' and longitude is '+ pt.y);
            map.infoWindow.setTitle('Your location');
            map.infoWindow.show(pt);

          }
          map.centerAt(pt);
        }
        
        function addGraphic(pt){
          var symbol = new SimpleMarkerSymbol(
            SimpleMarkerSymbol.STYLE_CIRCLE, 
            12, 
            new SimpleLineSymbol(
              SimpleLineSymbol.STYLE_SOLID,
              new Color([210, 105, 30, 0.5]), 
              8
            ), 
            new Color([210, 105, 30, 0.9])
          );
          var attribute = pt;
          graphic = new Graphic(pt, symbol, attribute);
          map.graphics.add(graphic);

          map.graphics.on("click", myGraphicsClickHandler);
      function myGraphicsClickHandler(evt) {

    map.infoWindow.setContent('The latitude is '+evt.graphic.attributes.x+ ' and longitude is '+ evt.graphic.attributes.y);
            map.infoWindow.setTitle('Your location');
            map.infoWindow.show(pt);
            console.log(pt);
  }

         // graphicsLayer.add(graphic);
         // map.addLayer(graphicsLayer);
        }    
      });
