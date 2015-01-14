function initialize() {
  var mapOptions = {
    zoom: 14,
    zoomControl: false,
    scaleControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    center: new google.maps.LatLng(40.429581,-74.18775),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map_canvas'),
      mapOptions);
  new google.maps.Marker({map:map,position:map.getCenter()})
        
        

  google.maps.event.addListener(map, 'center_changed', function() {
    
    //a value to determine whether the map has been resized
    var size=[this.getDiv().offsetWidth,this.getDiv().offsetHeight].join('x');
    
    //when the center has changed, but not the size of the map
    if(!this.get('size') || size===this.get('size')){
       console.log('ccc');
       this.setValues({size:size,_center:this.getCenter()});         
    }
    //when the map has been resized
    else{
      google.maps.event.addListenerOnce(this,'idle',function(){console.log('rrr');
      this.setValues({size:size,center:this.get('_center')});});      
    }
  });
  //trigger the resize-event to initialize the size and _center-values
  google.maps.event.trigger(map,'center_changed',{});
}

google.maps.event.addDomListener(window, 'load', initialize);
