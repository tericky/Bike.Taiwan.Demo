// Google map
var __map;
// Current Position
var _currentPosition;
// KML Layer;
var _kmlLayers = [];
// Spot
var _spots = [];

$(function() {
    for(var index = 0;index < routeDatas.length; index++) {
        makeMenu(routeDatas[index]);
    }

    $('#side-menu').metisMenu();
    $('div.navbar-collapse').addClass('collapse');

    $(window).bind("load resize", function() {
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if(width < 768) {
            $('.navbar-toggle').show();

            return;
        }

        var height = (this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height;
        if (height <= 350) {
            $('div.navbar-collapse').collapse('hide');
            $('.navbar-toggle').show();
        } else {
            $('div.navbar-collapse').collapse('show');
            $('.navbar-toggle').hide();
        }
    });

    $('.spot').on('click', function(e) {
        var btn = $(this).find('.btn');
        var showSpot = ($(btn).attr("show-data") === 'true');

        $(btn).attr("show-data", (!showSpot).toString().toLowerCase())
              .find('i')
              .removeClass(showSpot ? 'fa-check-square-o' : 'fa-square-o')
              .addClass(showSpot ? 'fa-square-o' : 'fa-check-square-o');

        showSpot = !showSpot;

        for(var index = 0;index < _spots.length; index++) {
            if( _spots[index].GroupId == $(btn).attr('id').replace('btnSpot', '') ) {
                console.log(_spots[index].Marker);
                _spots[index].Marker.setVisible( showSpot );
            }
        }

        e.preventDefault();
        return false;
    });

    $('.route').on('click', function(e) {
        var btn = $(this).find('.btn');
        var showRoute = ($(btn).attr("show-data") === 'true');

        $(btn).attr("show-data", (!showRoute).toString().toLowerCase())
              .find('i')
              .removeClass(showRoute ? 'fa-check-square-o' : 'fa-square-o')
              .addClass(showRoute ? 'fa-square-o' : 'fa-check-square-o');

        showRoute = !showRoute;

        for(var index = 0;index < _kmlLayers.length; index++) {
            if( _kmlLayers[index].Id == $(btn).attr('id').replace('btnRoute', '') ) {
                _kmlLayers[index].Layer.setMap( showRoute ? __map : null );
                break;
            }
        }

        e.preventDefault();
        return false;
    });
});

/*
function loadGoogleMapScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD70SJ1TLxx26DmIeKKOkjpz142O_YoKEg&sensor=false&signed_in=true&callback=mapInitialize';
    document.body.appendChild(script);
}
*/

function mapInitialize() {
    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(23.955746, 120.975594),
        streetViewControl: true,
        zoomControl: true,
        scaleControl: true,
        rotateControl: true,
        overviewMapControl: true,
        overviewMapControlOptions:{opened:false},
        mapTypeControl: true,
        mapMaker: false
    };

    __map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var menuCollapse = document.createElement('button');
    $(menuCollapse).attr('alt', '顯示/隱藏 選單')
                   .attr('title', '顯示/隱藏 選單')
                   .attr('data-toggle', 'collapse')
                   .attr('data-target', '.navbar-collapse')
                   .attr('data-placement', 'left')
                   .css('margin-right', '0px')
                   .addClass('btn btn-primary btn-circle btn-lg navbar-toggle')
                   .append($('<i class="fa fa-list">'))
                   .tooltip();
    menuCollapse.index = 1;
    __map.controls[google.maps.ControlPosition.RIGHT_TOP].push(menuCollapse);

    var currentLocationBtn = document.createElement('button');
    $(currentLocationBtn).attr('alt', '目前所在位置')
                 .attr('title', '目前所在位置')
                 .attr('data-toggle', 'tooltip')
                 .attr('data-placement', 'left')
                 .css('margin-bottom', '11px')
                 .addClass('btn btn-success btn-circle btn-lg')
                 .append($('<i class="fa fa-dot-circle-o">'))
                 .on('click', function() {
                    if(navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                            function(position) {
                                var pos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

                                __map.setCenter(pos);

                                _currentPosition = new google.maps.Marker({
                                    position: pos,
                                    map: __map,
                                    icon: 'images/cl.png'
                                });
                            }, 
                            function() {
                                handleNoGeolocation(true);
                            }
                        );
                    } else {
                        handleNoGeolocation(false);
                    }
                 })
                 .tooltip();
    currentLocationBtn.index = 2;
    __map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(currentLocationBtn);

    for( var index = 0;index < routeDatas.length; index++ ) {
        var route = routeDatas[index];

        _kmlLayers.push({
            Id : route.Id,
            Layer : new google.maps.KmlLayer({url: route.Url})
        });

        for(var sIndex = 0; sIndex < route.Spot.length; sIndex++) {
            _spots.push({
                GroupId : route.Id,
                Marker : makeMarker({
                            mid: route.Spot[sIndex].mid,
                            LatLng : new google.maps.LatLng(route.Spot[sIndex].LatLng[0], route.Spot[sIndex].LatLng[1]),
                            iconColor : route.Spot[sIndex].iconColor,
                            title: route.Spot[sIndex].title,
                            infoContent : makeInfoWindowContent(route.Spot[sIndex].infoContent)
                })
            });
        }
    }
}

function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
        alert('Error: The Geolocation service failed.');
    } else {
        alert('Error: Your browser doesn\'t support geolocation.');
    }
}

function makeMenu(routeObj) {
    var html = '<li>';
        html += '<a href="#"><i class="fa fa-calendar fa-fw"></i> ' + routeObj.Name + '<span class="fa arrow"></span></a>';
        html += '<ul class="nav nav-second-level">';

        html += '<li>';
        html += '<a href="#" class="spot">'
        html += '<i class="fa fa-university fa-fw"></i> 景點&nbsp;&nbsp;<span class="badge">' + routeObj.Spot.length + '</span>';
        html += '<button id="btnSpot' + routeObj.Id + '" class="btn btn-danger btn-circle pull-right" type="button" show-data="false"><i class="fa fa-square-o"></i></button>';
        html += '</a>';
        html += '</li>';


        html += '<li>';
        html += '<a href="#" class="route">';
        html += '<i class="fa fa-bus fa-fw"></i> 路線&nbsp;&nbsp;<span class="badge">' + routeObj.Route + '</span>';
        html += '<button id="btnRoute' + routeObj.Id + '" class="btn btn-danger btn-circle pull-right" type="button" show-data="false"><i class="fa fa-square-o"></i></button>';
        html += '</a>';
        html += '</li>';

    $('#side-menu').append(html);
}

function makeInfoWindowContent(opt) {
    if( opt === null || opt === undefined ) {
        opt = {Class : "default", Header : "", Body : "", Footer : ""};
    } else {
        if( opt.hasOwnProperty('Class') === false ? true : (opt.Class === undefined || opt.Class === null) ) {
            opt['Class'] = "default";
        }

        if( opt.hasOwnProperty('Header') === false ? true : (opt.Header === undefined || opt.Header === null) ) {
            opt['Header'] = "";
        }

        if( opt.hasOwnProperty('Body') === false ? true : (opt.Body === undefined || opt.Body === null) ) {
            opt['Body'] = "";
        }

        if( opt.hasOwnProperty('Footer') === false ? true : (opt.Footer === undefined || opt.Footer === null) ) {
            opt['Footer'] = "";
        }
    }

    var content = '<div class="panel panel-' + opt.Class + '"><div class="panel-heading">' + opt.Header + '</div>' + 
                  '<div class="panel-body">' + opt.Body + '</div>' +
                  '<div class="panel-footer">' + opt.Footer + '</div></div>';
    return content;
}
