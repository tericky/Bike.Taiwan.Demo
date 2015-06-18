var geoPools = {};

function getGeoRoute(key) {
	return makeGeoArr(geoPools[key]);
}

function makeGeoArr(arr) {
	var geoArr = [];

	if(arr.length % 2 === 0) {
		for(var index = 0;index < arr.length;index += 2) {
			geoArr.push( new google.maps.LatLng( arr[index+1], arr[index] ) );
		}
	}

	return geoArr;
}

function makeMarker(options) {
	var url = options.hasOwnProperty("iconUrl") && options.iconUrl.length > 0 ? options.iconUrl : 'http://maps.google.com/mapfiles/ms/icons/' + options.iconColor + '.png';

	var marker = new google.maps.Marker({
		// position: options.LatLng,
    	map: __map,
    	place: {
    		location : options.LatLng,
    		query : options.title
    	},
    	visible: false,
    	icon: url,
     	title: options.title,
     	infowindow: new google.maps.InfoWindow({
     		targetId: options.mid,
      		content: '<div id="divinfo' + options.mid + '">' + options.infoContent + '</div>',
      		location: options.LatLng
  		})
  	});

  	google.maps.event.addListener(marker, 'click', function() {
          this.infowindow.open(this.map, this);
    });

    google.maps.event.addListener(marker.infowindow, 'domready', function() {
    	var $pBody = $('#divinfo' + this.targetId).find('.panel-body');

    	// 街景
    	if( $($pBody).find('.StreetView').length > 0 ) {
	    	if( $('#divStreetView' + this.targetId).length > 0 ) {
	    		return;
	    	}

			$($pBody).find('.StreetView').attr('id', 'divStreetView' + this.targetId);
	  		new google.maps.StreetViewPanorama(
	  				document.getElementById('divStreetView' + this.targetId), 
		  			{
		    			position: this.location,
		    			addressControl: false,
		    			linksControl:true,
		    			panControl:false,
		    			zoom: 1
		  			}
		  	).setVisible(true);    		
    	}
	});

    return marker;
}

function makePolyline(options) {
	var line = new google.maps.Polyline({
		map: __map,
		visible: false,
    	path: options.path,
    	geodesic: true,
    	strokeColor: options.color,
    	strokeOpacity: 0.8,
    	strokeWeight: 8,
    	infowindow: new google.maps.InfoWindow({
     		targetId: options.mid,
     		infoCss: options.infoCss,
      		content: '<div id="divinfo' + options.mid + '">' + options.infoContent + '</div>',
      		position: options.path[Math.ceil(options.path.length / 2)]
  		})
  	});

  	google.maps.event.addListener(line, 'click', function() {
          this.infowindow.open(this.map, this);
    });

    google.maps.event.addListener(line.infowindow, 'domready', function() {
		var infowin = $('#divinfo' + this.targetId).parent().parent().parent().parent();

		if($(infowin).hasClass('alert') === false) {
			//$(infowin).addClass(this.infoCss);
		}
	});

  	return line;
}