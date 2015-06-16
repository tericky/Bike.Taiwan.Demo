// Google map
var __map;
// Weather
var __weather;
// Current Position
var _currentPosition;

//// -------------------- 第一天-------------------- ////
//// 飯店
var _markerDay1NagoyaInter;                // 名古屋國際
var _markerDay1NagoyaKanko;                // 名古屋觀光

//// 路線
var _polylineAirPlaneToHotel;              // 機場到飯店
//// -------------------- 第一天-------------------- ////


//// -------------------- 第二天-------------------- ////
//// 飯店
var _markerDay2HakubaAlps;                 // 白馬阿爾卑斯山酒店
var _markerDay2TsugaikeKohgen;             // 白馬姆池飯店

//// 景點
var _markerDay2TaxFree;                    // （有）光伸真珠 名古屋支店
var _markerDay2Tsumagojuku;                // 妻籠宿
var _markerDay2Magomejuku;                 // 馬龍宿
var _markerDay2Matsumoto;                  // 松本市美術館

//// 路線
var _polylineNagoyaInterToTaxFree;         // [名古屋国際ホテル] 到 [（有）光伸真珠 名古屋支店]
var _polylineTaxFreeToTsumagojuku;         // [（有）光伸真珠 名古屋支店] 到 [妻籠宿]
var _polylineMagomejukuToMatsumoto;        // [馬龍宿] 到 [松本市美術館]
var _polylineMatsumotoToHakubaAlps;        // [松本市美術館] 到 [白馬阿爾卑斯山酒店]
//// -------------------- 第二天-------------------- ////

//// -------------------- 第三天-------------------- ////
//// 飯店
var _markerDay3HotelIshikawa;              // HOTEL MYSTAYS 金澤

//// 景點
var _markerDay3Tateyama;                   // 立山ケーブルカー
var _markerDay3Bijodaira;                  // 美女平駅
var _markerDay3Murodo;                     // 室堂駅
var _markerDay3Daikanbo;                   // 大観峰駅
var _markerDay3Kurobedaira;                // 黒部平駅
var _markerDay3Kurobeko;                   // 黒部湖駅
var _markerDay3Kurobedamu;                 // 黒部ダム
var _markerDay3KurobedamuStation;          // 黒部ダム駅
var _markerDay3Ogizawa;                    // 扇沢駅

//// 路線
var _polylineTateyamaToBijodaira;          // [立山ケーブルカー] 到 [美女平駅]
var _polylineBijodairaToMurodo;            // [美女平駅] 到 [室堂駅]
var _polylineMurodoToDaikanbo;             // [室堂駅] 到 [大観峰駅]
var _polylineDaikanboToKurobedaira;        // [大観峰駅] 到 [黒部平駅]
var _polylineKurobedairaToKurobeko;        // [黒部平駅] 到 [黒部湖駅]
var _polylineKurobekoToKurobedamu;         // [黒部湖駅] 到 [黒部ダム]
var _polylineKurobedamuStationToOgizawa;   // [黒部ダム駅] 到 [扇澤駅]
    
//// -------------------- 第三天-------------------- ////

//// -------------------- 第四天-------------------- ////
//// 飯店
var _markerDay4TakayamaGreenHotel;         // 高山GREEN
var _markerDay4AssociaTakayamaResort;      // 高山ASSOCIA

//// 景點
var _markerDay4Kenrokuen;                  // 兼六園
var _markerDay4Higashi;                    // ひがし茶屋街
var _markerDay4Gasshou;                    // 合掌村

//// 路線
var _polylineHotelIshikawaToKenrokuen;     // [HOTEL MYSTAYS 金澤] 到 [兼六園]
var _polylineKenrokuenToHigashi;           // [兼六園] 到 [ひがし茶屋街]
var _polylineHigashiToGasshou;             // [ひがし茶屋街] 到 [白川郷·五箇山の合掌造り集落]
var _polylineGasshouToTakayamaGreenHotel;  // [白川郷·五箇山の合掌造り集落] 到 [高山グリーンホテル]
//// -------------------- 第四天-------------------- ////

//// -------------------- 第五天-------------------- ////
//// 景點
var _markerDay5Market;                     // 宮川朝市
var _markerDay5Stree;                      // 上三之町
var _markerDay5Mino;                       // 美濃古街
// var _markerDay5Enakyo;                     // 惠那峽

//// 路線
var _polylineTakayamaGreenHotelToMarket;   // [高山グリーンホテル] 到 [宮川朝市]
var _polylineMarketToStree;                // [宮川朝市] 到 [上三之町]
// var _polylineStreeToAirPlane;           // [上三之町] 到 [機場]
var _polylineStreeToMino;                  // [上三之町] 到 [美濃古街]
// var _polylineStreeToEnakyo;             // [上三之町] 到 [惠那峽]
var _polylineMinoToAirPlane;               // [美濃古街] 到 [機場]
// var _polylineEnakyoToAirPlane;          // [惠那峽] 到 [機場]
//// -------------------- 第五天-------------------- ////

//// -------------------- 機場---------------------- ////
var _markerFlyTY;                          // 桃  園
var _markerFlyNY;                          // 名古屋
//// -------------------- 機場---------------------- ////

//// -------------------- 店 ----------------------- ////
var _markerBicCamera;                      // BIC CAMERA
var _markerDonki;                          // 激安の殿堂
var _markerOasis21;                        // 宇宙船綠洲21(Oasis 21)
var _markerAppleStore;                     // Apple Store
var _markerMatsukiyo;                      // 松本清
var _markerZeroGate;                       // ZERO GATE
//// -------------------- 店 ----------------------- ////



$(function() {
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

    // 飯店
    $('.hotel').on('click', function(e){
        $(this).find('button').click();

        e.preventDefault();
        return false;
    });

    $('.hotel > button').on('click', function(e){
        var showMarker = false;


        if( $(this).attr("show-data") === 'true' ) {
            $(this).attr("show-data", 'false').find('i').removeClass('fa-check-square-o').addClass('fa-square-o');

            showMarker = false;
        } else {
            $(this).attr("show-data", 'true').find('i').removeClass('fa-square-o').addClass('fa-check-square-o');

            showMarker = true;
        }

        if(this.id === 'btnHotelDay1') {
            // 名古屋國際
            _markerDay1NagoyaInter.setVisible(showMarker);
            // 名古屋觀光
            _markerDay1NagoyaKanko.setVisible(showMarker);
        }
        else if(this.id === 'btnHotelDay2') {
            // 名古屋國際
            _markerDay2HakubaAlps.setVisible(showMarker);
            // 名古屋觀光
            _markerDay2TsugaikeKohgen.setVisible(showMarker);
        }
        else if(this.id === 'btnHotelDay3') {
            // HOTEL MYSTAYS 金澤
            _markerDay3HotelIshikawa.setVisible(showMarker);
        }
        else if(this.id === 'btnHotelDay4') {
            // 高山GREEN
            _markerDay4TakayamaGreenHotel.setVisible(showMarker);
            // 高山ASSOCIA
            _markerDay4AssociaTakayamaResort.setVisible(showMarker);
        }

        e.preventDefault();
        return false;
    });

    // 景點
    $('.spot').on('click', function(e){
        $(this).find('button').click();

        e.preventDefault();
        return false;
    });
    $('.spot > button').on('click', function(e){
        var showMarker = false;

        if( $(this).attr("show-data") === 'true' ) {
            $(this).attr("show-data", 'false').find('i').removeClass('fa-check-square-o').addClass('fa-square-o');

            showMarker = false;

        } else {
            $(this).attr("show-data", 'true').find('i').removeClass('fa-square-o').addClass('fa-check-square-o');

            showMarker = true;
        }

        if(this.id === 'btnSpotDay2') {
            // （有）光伸真珠 名古屋支店
            _markerDay2TaxFree.setVisible(showMarker);
            //// 妻籠宿
            _markerDay2Tsumagojuku.setVisible(showMarker);
            //// 馬龍宿
            _markerDay2Magomejuku.setVisible(showMarker);
            //// 松本市美術館
            _markerDay2Matsumoto.setVisible(showMarker);
        }
        else if(this.id === 'btnSpotDay3') {
            // 立山ケーブルカー
            _markerDay3Tateyama.setVisible(showMarker);
            // 美女平駅
            _markerDay3Bijodaira.setVisible(showMarker);
            // 室堂駅
            _markerDay3Murodo.setVisible(showMarker);
            // 大観峰駅
            _markerDay3Daikanbo.setVisible(showMarker);
            // 黒部平駅
            _markerDay3Kurobedaira.setVisible(showMarker);
            // 黒部湖駅
            _markerDay3Kurobeko.setVisible(showMarker);
            // 黒部ダム
            _markerDay3Kurobedamu.setVisible(showMarker);
            // 黒部ダム駅
            _markerDay3KurobedamuStation.setVisible(showMarker);
            // 扇澤駅
            _markerDay3Ogizawa.setVisible(showMarker);
        }
        else if(this.id === 'btnSpotDay4') {
            // 兼六園
            _markerDay4Kenrokuen.setVisible(showMarker);
            // ひがし茶屋街
            _markerDay4Higashi.setVisible(showMarker);
            // 合掌村
            _markerDay4Gasshou.setVisible(showMarker);
        }
        else if(this.id === 'btnSpotDay5') {
            //// 宮川朝市
            _markerDay5Market.setVisible(showMarker);
            //// 上三之町
            _markerDay5Stree.setVisible(showMarker);

            //// 美濃古街
            _markerDay5Mino.setVisible(showMarker);
            //// 惠那峽
            // _markerDay5Enakyo.setVisible(showMarker);
        }

        e.preventDefault();

        return false;
    });

    // 路線
    $('.route').on('click', function(e){
        $(this).find('button').click();

        e.preventDefault();
        return false;
    });
    $('.route > button').on('click', function(e){
        var showLine = false;

        if( $(this).attr("show-data") === 'true' ) {
            $(this).attr("show-data", 'false').find('i').removeClass('fa-check-square-o').addClass('fa-square-o');

            showLine = false;
        } else {
            $(this).attr("show-data", 'true').find('i').removeClass('fa-square-o').addClass('fa-check-square-o');

            showLine = true;
        }

        if(this.id === 'btnRouteDay1') {
            // 機場到飯店
            _polylineAirPlaneToHotel.setVisible(showLine);
        }
        else if(this.id === 'btnRouteDay2') {
            // [名古屋国際ホテル] 到 [（有）光伸真珠 名古屋支店]
            _polylineNagoyaInterToTaxFree.setVisible(showLine);
            // [（有）光伸真珠 名古屋支店] 到 [妻籠宿]
            _polylineTaxFreeToTsumagojuku.setVisible(showLine);
            // [馬龍宿] 到 [松本市美術館]
            _polylineMagomejukuToMatsumoto.setVisible(showLine);
            // [松本市美術館] 到 [白馬阿爾卑斯山酒店]
            _polylineMatsumotoToHakubaAlps.setVisible(showLine);
        }
        else if(this.id === 'btnRouteDay3') {
            // [立山ケーブルカー] 到 [美女平駅]
            _polylineTateyamaToBijodaira.setVisible(showLine);
            // [美女平駅] 到 [室堂駅]
            _polylineBijodairaToMurodo.setVisible(showLine);
            // [室堂駅] 到 [大観峰駅]
            _polylineMurodoToDaikanbo.setVisible(showLine);
            // [大観峰駅] 到 [黒部平駅]
            _polylineDaikanboToKurobedaira.setVisible(showLine);
            // [黒部平駅] 到 [黒部湖駅]
            _polylineKurobedairaToKurobeko.setVisible(showLine);
            // [黒部湖駅] 到 [黒部ダム]
            _polylineKurobekoToKurobedamu.setVisible(showLine);
            // [黒部ダム駅] 到 [扇澤駅]
            _polylineKurobedamuStationToOgizawa.setVisible(showLine);
        }
        else if(this.id === 'btnRouteDay4') {
            // [HOTEL MYSTAYS 金澤] 到 [兼六園]
            _polylineHotelIshikawaToKenrokuen.setVisible(showLine);
            // [兼六園] 到 [ひがし茶屋街]
            _polylineKenrokuenToHigashi.setVisible(showLine);
            // [ひがし茶屋街] 到 [白川郷·五箇山の合掌造り集落]
            _polylineHigashiToGasshou.setVisible(showLine);
            // [白川郷·五箇山の合掌造り集落] 到 [高山グリーンホテル]
            _polylineGasshouToTakayamaGreenHotel.setVisible(showLine);
        }
        else if(this.id === 'btnRouteDay5') {
            // [高山グリーンホテル] 到 [宮川朝市]
            _polylineTakayamaGreenHotelToMarket.setVisible(showLine);
            // [宮川朝市] 到 [上三之町]
            _polylineMarketToStree.setVisible(showLine);
            // [上三之町] 到 [機場]
            //_polylineStreeToAirPlane.setVisible(showLine);
            // [上三之町] 到 [美濃古街]
            _polylineStreeToMino.setVisible(showLine);
            // [上三之町] 到 [惠那峽]
            // _polylineStreeToEnakyo.setVisible(showLine);
            // [美濃古街] 到 [機場]
            _polylineMinoToAirPlane.setVisible(showLine);
            // [惠那峽] 到 [機場]
            // _polylineEnakyoToAirPlane.setVisible(showLine);
        }

        e.preventDefault();

        return false;
    });

    // 機場
    $('.fly').on('click', function(e){
        $(this).find('button').click();

        e.preventDefault();
        return false;
    });

    $('.fly > button').on('click', function(e){
        var showMarker = false;


        if( $(this).attr("show-data") === 'true' ) {
            $(this).attr("show-data", 'false').find('i').removeClass('fa-check-square-o').addClass('fa-square-o');

            showMarker = false;
        } else {
            $(this).attr("show-data", 'true').find('i').removeClass('fa-square-o').addClass('fa-check-square-o');

            showMarker = true;
        }

        if(this.id === 'btnSpotFlyTY') {
            // 桃  園
            _markerFlyTY.setVisible(showMarker);
        }
        else if(this.id === 'btnSpotFlyNY') {
            // 名古屋
            _markerFlyNY.setVisible(showMarker);
        }

        e.preventDefault();
        return false;
    });

    // 店
    $('.store').on('click', function(e){
        $(this).find('button').click();

        e.preventDefault();
        return false;
    });

    $('.store > button').on('click', function(e){
        var showMarker = false;


        if( $(this).attr("show-data") === 'true' ) {
            $(this).attr("show-data", 'false').find('i').removeClass('fa-check-square-o').addClass('fa-square-o');

            showMarker = false;
        } else {
            $(this).attr("show-data", 'true').find('i').removeClass('fa-square-o').addClass('fa-check-square-o');

            showMarker = true;
        }

        if(this.id === 'btnSpotBicCamera') {
            // BIC CAMERA
            $.each(_markerBicCamera, function(index, item) {
                this.setVisible(showMarker);    
            });
        }
        else if(this.id === 'btnSpotDonki') {
            // 激安の殿堂
            $.each(_markerDonki, function(index, item) {
                this.setVisible(showMarker);    
            });
        }
        else if(this.id === 'btnSpotOasis21') {
            // 宇宙船綠洲21(Oasis 21)
            $.each(_markerOasis21, function(index, item) {
                this.setVisible(showMarker);    
            });
        }
        else if(this.id === 'btnSpotApple') {
            // Apple Store
            $.each(_markerAppleStore, function(index, item) {
                this.setVisible(showMarker);    
            });
        }
        else if(this.id === 'btnSpotMatsukiyo') {
            // 松本清
            $.each(_markerMatsukiyo, function(index, item) {
                this.setVisible(showMarker);    
            });
        }
        else if(this.id === 'btnSpotZeroGate') {
            // ZERO GATE
            $.each(_markerZeroGate, function(index, item) {
                this.setVisible(showMarker);    
            });
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
        // 北陸中部
        center: new google.maps.LatLng(35.982663, 137.280964),
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

    __weather = new google.maps.weather.WeatherLayer({
        map: null,
        temperatureUnits: google.maps.weather.TemperatureUnit.CELSIUS,
        windSpeedUnits: google.maps.weather.WindSpeedUnit.METERS_PER_SECOND
      });

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

    var mailLink = document.createElement('a');
    $(mailLink).attr('alt', '寫信給 Tericky')
               .attr('title', '寫信給 Tericky')
               .attr('href', 'mailto:tericky@gis.tw?Subject=我想要加入XXX景點、XXX商店')
               .attr('data-toggle', 'tooltip')
               .attr('data-placement', 'left')
               //.css('margin-top', '11px')
               .addClass('btn btn-danger btn-circle btn-lg')
               .append($('<i class="fa fa-envelope">'))
               .tooltip();
    mailLink.index = 2;
    __map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(mailLink);

/*
    var weatherBtn = document.createElement('button');
    $(weatherBtn).attr('alt', '顯示/隱藏 天氣資訊')
                 .attr('title', '顯示/隱藏 天氣資訊')
                 .attr('data-toggle', 'tooltip')
                 .attr('data-placement', 'left')
                 .addClass('btn btn-warning btn-circle btn-lg')
                 .append($('<i class="fa fa-umbrella">'))
                 .on('click', function() {
                     __weather.setMap(__weather.getMap() === null ? __map : null);
                 })
                 .tooltip();
    weatherBtn.index = 3;
    __map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(weatherBtn);
*/
    var currentLocationBtn = document.createElement('button');
    $(currentLocationBtn).attr('alt', '顯示/隱藏 天氣資訊')
                 .attr('title', '顯示/隱藏 天氣資訊')
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
    currentLocationBtn.index = 4;
    __map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(currentLocationBtn);

    initailMarkerDay1();
    initailMarkerDay2();
    initailMarkerDay3();
    initailMarkerDay4();
    initailMarkerDay5();
    initialMarkerAirPlane();
    initialStores();
    initialMeals();
}

function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
        alert('Error: The Geolocation service failed.');
    } else {
        alert('Error: Your browser doesn\'t support geolocation.');
    }
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

function initailMarkerDay1() {
    // 名古屋國際
    _markerDay1NagoyaInter = makeMarker({
        mid: 'markerDay1NagoyaInter',
        LatLng : new google.maps.LatLng(35.169442, 136.904819),
        iconColor : 'blue-dot',
        title: '名古屋国際ホテル',
        infoContent : makeInfoWindowContent({ Class: 'primary', Header:'名古屋国際ホテル（A.B.D車）', Body:'<div class="StreetView" />', Footer : '〒460-0003 名古屋市中区錦3-23-3'})
    });

    // 名古屋觀光
    _markerDay1NagoyaKanko = makeMarker({
        mid: 'markerDay1NagoyaKanko',
        LatLng : new google.maps.LatLng(35.168767, 136.895367),
        iconColor : 'blue-dot',
        title: '名古屋観光ホテル',
        infoContent : makeInfoWindowContent({Class: 'primary', Header:'名古屋観光ホテル（C車）', Body:'<div class="StreetView" />', Footer : '〒460-8608 名古屋市中区錦一丁目19-30'})
    });

    // 機場到飯店
    _polylineAirPlaneToHotel = makePolyline({
        mid: 'polylineAirPlaneToHotel',
        path: getGeoRoute('geoAirPlaneToHotel'),
        color: '#337ab7',
        title: '機場到飯店',
        infoCss: 'alert alert-primary',
        infoContent : '<div>機場到飯店</div>'
      });
}

function initailMarkerDay2() {
    // 白馬阿爾卑斯山酒店
    _markerDay2HakubaAlps = makeMarker({
        mid: 'markerDay2HakubaAlps',
        LatLng : new google.maps.LatLng(36.763555, 137.876894),
        iconColor : 'red-dot',
        title: '白馬アルプスホテル',
        infoContent : makeInfoWindowContent({Class: 'danger', Header:'白馬アルプスホテル（B.C.D車）', Body:'<div class="StreetView" />', Footer : '〒399-9422長野県北安曇郡小谷村白馬乗鞍高原'})
    });

    // 白馬姆池飯店
    _markerDay2TsugaikeKohgen = makeMarker({
        mid: 'markerDay2TsugaikeKohgen',
        LatLng : new google.maps.LatLng(36.749506, 137.871613),
        iconColor : 'red-dot',
        title: '栂池高原ホテル',
        infoContent : makeInfoWindowContent({Class: 'danger', Header:'栂池高原ホテル（A車）', Body:'<div class="StreetView" />', Footer : '〒399-9422 長野県北安曇郡小谷村 千国乙12840-1'})
    });

    // （有）光伸真珠 名古屋支店
    _markerDay2TaxFree = makeMarker({
        mid: 'markerDay2TaxFree',
        LatLng : new google.maps.LatLng(35.175504, 136.872646),
        iconColor : 'red-pushpin',
        title: '（有）光伸真珠 名古屋支店',
        infoContent : makeInfoWindowContent({Class: 'danger', Header:'（有）光伸真珠 名古屋支店（停留約30-60分鐘）', Body:'<div class="StreetView" />', Footer : '〒453-0017 名古屋市中村区則武本通1-39 光伸名古屋ビル'})
    });

    // 妻籠宿
    _markerDay2Tsumagojuku = makeMarker({
        mid: 'markerDay2Tsumagojuku',
        LatLng : new google.maps.LatLng(35.577340, 137.595665),
        iconColor : 'red-pushpin',
        title: '妻籠宿',
        infoContent : makeInfoWindowContent({Class: 'danger', Header:'妻籠宿（+馬籠宿，停留約60分鐘）', Body:'<div class="StreetView" />', Footer : '〒399-5302 長野県木曽郡南木曽町吾妻2159-2'})
    });

    // 馬龍宿
    _markerDay2Magomejuku = makeMarker({
        mid: 'markerDay2Magomejuku',
        LatLng : new google.maps.LatLng(35.528611, 137.569869),
        iconColor : 'red-pushpin',
        title: '馬籠宿',
        infoContent : makeInfoWindowContent({Class: 'danger', Header:'馬籠宿（+妻籠宿，停留約60分鐘）', Body:'<div class="StreetView" />', Footer : '〒508-0502 岐阜県中津川市馬籠4300-1'})
    });

    // 松本市美術館
    _markerDay2Matsumoto = makeMarker({
        mid: 'markerDay2Matsumoto',
        LatLng : new google.maps.LatLng(36.231659, 137.976178),
        iconColor : 'red-pushpin',
        title: '松本市美術館',
        infoContent : makeInfoWindowContent({Class: 'danger', Header:'松本市美術館（停留約70分鐘）', Body:'<div class="StreetView" />', Footer : '〒390-0811 長野県松本市中央4丁目2-22'})
    });

    // [名古屋国際ホテル] 到 [（有）光伸真珠 名古屋支店]
    _polylineNagoyaInterToTaxFree = makePolyline({
        mid: 'polylineNagoyaInterToTaxFree',
        path: getGeoRoute('geoNagoyaInterToTaxFree'),
        color: '#C12E2A',
        title: '[名古屋国際ホテル] 到 [（有）光伸真珠 名古屋支店]',
        infoCss: 'alert alert-danger',
        infoContent : '<div>[名古屋国際ホテル] 到 [（有）光伸真珠 名古屋支店]</div><div>車程約25分鐘</div>'
      });

    // [（有）光伸真珠 名古屋支店] 到 [妻籠宿]
    _polylineTaxFreeToTsumagojuku = makePolyline({
        mid: 'polylineTaxFreeToTsumagojuku',
        path: getGeoRoute('geoTaxFreeToTsumagojuku'),
        color: '#C12E2A',
        title: '[（有）光伸真珠 名古屋支店] 到 [妻籠宿]',
        infoCss: 'alert alert-danger',
        infoContent : '<div>[（有）光伸真珠 名古屋支店] 到 [妻籠宿]</div><div>車程約110分鐘</div>'
      });

    // [馬龍宿] 到 [松本市美術館]
    _polylineMagomejukuToMatsumoto = makePolyline({
        mid: 'polylineMagomejukuToMatsumoto',
        path: getGeoRoute('geoMagomejukuToMatsumoto'),
        color: '#C12E2A',
        title: '[馬龍宿] 到 [松本市美術館]',
        infoCss: 'alert alert-danger',
        infoContent : '<div>[馬龍宿] 到 [松本市美術館]</div><div>車程約120分鐘</div>'
      });

    // [松本市美術館] 到 [白馬阿爾卑斯山酒店]
    _polylineMatsumotoToHakubaAlps = makePolyline({
        mid: 'polylineMagomejukuToHakubaAlps',
        path: getGeoRoute('geoMagomejukuToHakubaAlps'),
        color: '#C12E2A',
        title: '[松本市美術館] 到 [白馬阿爾卑斯山酒店]',
        infoCss: 'alert alert-danger',
        infoContent : '<div>[松本市美術館] 到 [白馬阿爾卑斯山酒店]</div><div>車程約70分</div>'
      });
}

function initailMarkerDay3() {
    // HOTEL MYSTAYS 金澤
    _markerDay3HotelIshikawa = makeMarker({
        mid: 'markerDay3HotelIshikawa',
        LatLng : new google.maps.LatLng(36.580055, 136.643628),
        iconColor : 'green-dot',
        title: 'ホテルマイステイズ金沢',
        infoContent : makeInfoWindowContent({Class: 'success', Header:'ホテルマイステイズ金沢（A.B.C.D車）', Body:'<div class="StreetView" />', Footer : '〒920-0031 石川県金沢市広岡2-13-5'})
    });

    // 立山駅
    _markerDay3Tateyama = makeMarker({
        mid: 'markerDay3Tateyama',
        LatLng : new google.maps.LatLng(36.583435, 137.445887),
        iconColor : 'grn-pushpin',
        title: '立山駅',
        infoContent : makeInfoWindowContent({Class: 'success', Header:'立山駅', Body:'<div class="StreetView" />', Footer : '富山県中新川郡立山町'})
    });
    // 美女平駅
    _markerDay3Bijodaira = makeMarker({
        mid: 'markerDay3Bijodaira',
        LatLng : new google.maps.LatLng(36.583333, 137.458771),
        iconColor : 'grn-pushpin',
        title: '美女平駅',
        infoContent : makeInfoWindowContent({Class: 'success', Header:'美女平駅', Body:'<div class="StreetView" />', Footer : '富山県中新川郡立山町芦峅寺字ブナ坂'})
    });
    // 室堂駅
    _markerDay3Murodo = makeMarker({
        mid: 'markerDay3Murodo',
        LatLng : new google.maps.LatLng(36.577376, 137.595489),
        iconColor : 'grn-pushpin',
        title: '室堂駅',
        infoContent : makeInfoWindowContent({Class: 'success', Header:'室堂駅', Body:'<div class="StreetView" />', Footer : '富山県中新川郡立山町芦峅寺'})
    });
    // 大観峰駅
    _markerDay3Daikanbo = makeMarker({
        mid: 'markerDay3Daikanbo',
        LatLng : new google.maps.LatLng(36.569770, 137.631684),
        iconColor : 'grn-pushpin',
        title: '大観峰駅',
        infoContent : makeInfoWindowContent({Class: 'success', Header:'大観峰駅', Body:'<div class="StreetView" />', Footer : '富山県中新川郡立山町'})
    });
    // 黒部平駅
    _markerDay3Kurobedaira = makeMarker({
        mid: 'markerDay3Kurobedaira',
        LatLng : new google.maps.LatLng(36.567103, 137.650149),
        iconColor : 'grn-pushpin',
        title: '黒部平駅',
        infoContent : makeInfoWindowContent({Class: 'success', Header:'黒部平駅', Body:'<div class="StreetView" />', Footer : '富山県中新川郡立山町'})
    });
    // 黒部湖駅
    _markerDay3Kurobeko = makeMarker({
        mid: 'markerDay3Kurobeko',
        LatLng : new google.maps.LatLng(36.566586, 137.658625),
        iconColor : 'grn-pushpin',
        title: '黒部湖駅',
        infoContent : makeInfoWindowContent({Class: 'success', Header:'黒部湖駅', Body:'<div class="StreetView" />', Footer : '富山県中新川郡立山町'})
    });
    // 黒部ダム
    _markerDay3Kurobedamu = makeMarker({
        mid: 'markerDay3Kurobedamu',
        LatLng : new google.maps.LatLng(36.566542, 137.664461),
        iconColor : 'grn-pushpin',
        title: '黒部ダム',
        infoContent : makeInfoWindowContent({Class: 'success', Header:'黒部ダム', Body:'<div class="StreetView" />', Footer : '富山県中新川郡立山町芦峅寺'})
    });
    // 黒部ダム駅
    _markerDay3KurobedamuStation = makeMarker({
        mid: 'markerDay3KurobedamuStation',
        LatLng : new google.maps.LatLng(36.566611, 137.666137),
        iconColor : 'grn-pushpin',
        title: '黒部ダム駅',
        infoContent : makeInfoWindowContent({Class: 'success', Header:'黒部ダム駅', Body:'<div class="StreetView" />', Footer : '富山県中新川郡立山町'})
    });
    // 扇沢駅
    _markerDay3Ogizawa = makeMarker({
        mid: 'markerDay3Ogizawa',
        LatLng : new google.maps.LatLng(36.558207, 137.721847),
        iconColor : 'grn-pushpin',
        title: '扇澤駅',
        infoContent : makeInfoWindowContent({Class: 'success', Header:'扇沢駅', Body:'<div class="StreetView" />', Footer : '長野県大町市平2117'})
    });

    // [立山ケーブルカー] 到 [美女平駅]
    _polylineTateyamaToBijodaira = makePolyline({
        mid: 'polylineTateyamaToBijodaira',
        path: getGeoRoute('geoTateyamaToBijodaira'),
        color: '#419641',
        title: '[立山ケーブルカー] 到 [美女平駅]',
        infoCss: 'alert alert-success',
        infoContent : '<div>[立山ケーブルカー] 到 [美女平駅]</div><div>車程約7分鐘</div>'
      });
    // [美女平駅] 到 [室堂駅]
    _polylineBijodairaToMurodo = makePolyline({
        mid: 'polylineBijodairaToMurodo',
        path: getGeoRoute('geoBijodairaToMurodo'),
        color: '#419641',
        title: '[美女平駅] 到 [室堂駅]',
        infoCss: 'alert alert-success',
        infoContent : '<div>[美女平駅] 到 [室堂駅]</div><div>車程約50分鐘</div>'
      });
      // [室堂駅] 到 [大観峰駅]
    _polylineMurodoToDaikanbo = makePolyline({
        mid: 'polylineMurodoToDaikanbo',
        path: getGeoRoute('geoMurodoToDaikanbo'),
        color: '#419641',
        title: '[室堂駅] 到 [大観峰駅]',
        infoCss: 'alert alert-success',
        infoContent : '<div>[室堂駅] 到 [大観峰駅]</div><div>車程約10分鐘</div>'
      });
      // [大観峰駅] 到 [黒部平駅]
    _polylineDaikanboToKurobedaira = makePolyline({
        mid: 'polylineDaikanboToKurobedaira',
        path: getGeoRoute('geoDaikanboToKurobedaira'),
        color: '#419641',
        title: '[大観峰駅] 到 [黒部平駅]',
        infoCss: 'alert alert-success',
        infoContent : '<div>[大観峰駅] 到 [黒部平駅]</div><div>車程約10分鐘</div>'
      });
      // [黒部平駅] 到 [黒部湖駅]
    _polylineKurobedairaToKurobeko = makePolyline({
        mid: 'polylineKurobedairaToKurobeko',
        path: getGeoRoute('geoKurobedairaToKurobeko'),
        color: '#419641',
        title: '[黒部平駅] 到 [黒部湖駅]',
        infoCss: 'alert alert-success',
        infoContent : '<div>[黒部平駅] 到 [黒部湖駅]</div><div>車程約5分鐘</div>'
      });
      // [黒部湖駅] 到 [黒部ダム]
    _polylineKurobekoToKurobedamu = makePolyline({
        mid: 'polylineKurobekoToKurobedamu',
        path: getGeoRoute('geoKurobekoToKurobedamu'),
        color: '#419641',
        title: '[黒部湖駅] 到 [黒部ダム]',
        infoCss: 'alert alert-success',
        infoContent : '<div>[黒部湖駅] 到 [黒部ダム]</div><div>徒步約15分鐘</div>'
      });
      // [黒部ダム駅] 到 [扇澤駅]
    _polylineKurobedamuStationToOgizawa = makePolyline({
        mid: 'polylineKurobedamuStationToOgizawa',
        path: getGeoRoute('geoKurobedamuStationToOgizawa'),
        color: '#419641',
        title: '[黒部ダム駅] 到 [扇澤駅]',
        infoCss: 'alert alert-success',
        infoContent : '<div>[黒部ダム駅] 到 [扇澤駅]</div><div>車程約16分鐘</div>'
      });
}

function initailMarkerDay4() {
    // 高山GREEN
    _markerDay4TakayamaGreenHotel = makeMarker({
        mid: 'markerDay4TakayamaGreenHotel',
        LatLng : new google.maps.LatLng(36.137932, 137.247650),
        iconColor : 'yellow-dot',
        title: '高山グリーンホテル',
        infoContent : makeInfoWindowContent({Class: 'warning', Header:'高山グリーンホテル（C.D車）', Body:'<div class="StreetView" />', Footer : '〒506-0031 岐阜県高山市西之一色町2-180'})
    });
    // 高山ASSOCIA
    _markerDay4AssociaTakayamaResort = makeMarker({
        mid: 'markerDay4AssociaTakayamaResort',
        LatLng : new google.maps.LatLng(36.122820, 137.243658),
        iconColor : 'yellow-dot',
        title: 'ホテルアソシア高山リゾート',
        infoContent : makeInfoWindowContent({Class: 'warning', Header:'ホテルアソシア高山リゾート（A.B車）', Body:'<div class="StreetView" />', Footer : '〒506-0033 岐阜県高山市越後町1134'})
    });
    // 兼六園
    _markerDay4Kenrokuen = makeMarker({
        mid: 'markerDay4Kenrokuen',
        LatLng : new google.maps.LatLng(36.562231, 136.662651),
        iconColor : 'ylw-pushpin',
        title: '兼六園',
        infoContent : makeInfoWindowContent({Class: 'warning', Header:'兼六園（停留約120分鐘）', Body:'<div class="StreetView" />', Footer : '〒920-0937 石川県金沢市丸の内1番1号'})
    });
    // ひがし茶屋街
    _markerDay4Higashi = makeMarker({
        mid: 'markerDay4Higashi',
        LatLng : new google.maps.LatLng(36.572677, 136.666515),
        iconColor : 'ylw-pushpin',
        title: 'ひがし茶屋街',
        infoContent : makeInfoWindowContent({Class: 'warning', Header:'ひがし茶屋街（停留約30分鐘）', Body:'<div class="StreetView" />', Footer : '〒920-0858 金沢市木ノ新保町１番１号'})
    });
    // 合掌村
    _markerDay4Gasshou = makeMarker({
        mid: 'markerDay4Gasshou',
        LatLng : new google.maps.LatLng(36.256532, 136.905260),
        iconColor : 'ylw-pushpin',
        title: '白川郷·五箇山の合掌造り集落',
        infoContent : makeInfoWindowContent({Class: 'warning', Header:'合掌村（停留約150分鐘）', Body:'<div class="StreetView" />', Footer : '〒501-5692 岐阜県大野郡白川村鳩谷517'})
    });

    // [HOTEL MYSTAYS 金澤] 到 [兼六園]
    _polylineHotelIshikawaToKenrokuen = makePolyline({
        mid: 'polylineHotelIshikawaToKenrokuen',
        path: getGeoRoute('geoHotelIshikawaToKenrokuen'),
        color: '#EB9316',
        title: '[HOTEL MYSTAYS 金澤] 到 [兼六園]',
        infoCss: 'alert alert-danger',
        infoContent : '<div>[HOTEL MYSTAYS 金澤] 到 [兼六園]</div><div>車程約10分鐘</div>'
      });

    // [兼六園] 到 [ひがし茶屋街]
    _polylineKenrokuenToHigashi = makePolyline({
        mid: 'polylineKenrokuenToHigashi',
        path: getGeoRoute('geoKenrokuenToHigashi'),
        color: '#EB9316',
        title: '[兼六園] 到 [ひがし茶屋街]',
        infoCss: 'alert alert-danger',
        infoContent : '<div>[兼六園] 到 [ひがし茶屋街]</div><div>車程約12分鐘</div>'
      });

    // [ひがし茶屋街] 到 [白川郷·五箇山の合掌造り集落]
    _polylineHigashiToGasshou = makePolyline({
        mid: 'polylineHigashiToGasshou',
        path: getGeoRoute('geoHigashiToGasshou'),
        color: '#EB9316',
        title: '[ひがし茶屋街] 到 [白川郷·五箇山の合掌造り集落]',
        infoCss: 'alert alert-danger',
        infoContent : '<div>[ひがし茶屋街] 到 [白川郷·五箇山の合掌造り集落]</div><div>車程約70分鐘</div>'
      });

      // [白川郷·五箇山の合掌造り集落] 到 [高山グリーンホテル]
    _polylineGasshouToTakayamaGreenHotel = makePolyline({
        mid: 'polylineGasshouToTakayamaGreenHotel',
        path: getGeoRoute('geoGasshouToTakayamaGreenHotel'),
        color: '#EB9316',
        title: '[白川郷·五箇山の合掌造り集落] 到 [高山グリーンホテル]',
        infoCss: 'alert alert-danger',
        infoContent : '<div>[白川郷·五箇山の合掌造り集落] 到 [高山グリーンホテル]</div><div>車程約55分鐘</div>'
      });
}

function initailMarkerDay5() {
    // 宮川朝市
    _markerDay5Market = makeMarker({
        mid: 'markerDay5Market',
        LatLng : new google.maps.LatLng(36.143853, 137.258320),
        iconColor : 'ltblu-pushpin',
        title: '宮川朝市',
        infoContent : makeInfoWindowContent({Class: 'info', Header:'宮川朝市（停留約30分鐘）', Body:'<div class="StreetView" />', Footer : '〒506-0841 岐阜県高山市下三之町宮川沿い'})
    });
    // 上三之町
    _markerDay5Stree = makeMarker({
        mid: 'markerDay5Stree',
        LatLng : new google.maps.LatLng(36.141302, 137.259622),
        iconColor : 'ltblu-pushpin',
        title: '上三之町',
        infoContent : makeInfoWindowContent({Class: 'info', Header:'上三之町（停留約60分鐘）', Body:'<div class="StreetView" />', Footer : '〒506-0846 岐阜県高山市上三之町'})
    });
    // 美濃古街
    _markerDay5Mino = makeMarker({
        mid: 'markerDay5Mino',
        LatLng : new google.maps.LatLng(35.546654, 136.913284),
        iconColor : 'ltblu-pushpin',
        title: '美濃古街',
        infoContent : makeInfoWindowContent({Class: 'info', Header:'美濃古街（停留約50分鐘）', Body:'<div class="StreetView" />', Footer : '〒501-3792 岐阜縣美濃市美濃市1350'})
    });

    // [高山グリーンホテル] 到 [宮川朝市]
    _polylineTakayamaGreenHotelToMarket = makePolyline({
        mid: 'polylineTakayamaGreenHotelToMarket',
        path: getGeoRoute('geoTakayamaGreenHotelToMarket'),
        color: '#23527C',
        title: '[高山グリーンホテル] 到 [宮川朝市]',
        infoCss: 'alert alert-danger',
        infoContent : '<div>[高山グリーンホテル] 到 [宮川朝市]</div><div>車程約5分鐘</div>'
      });

      // [宮川朝市] 到 [上三之町]
    _polylineMarketToStree = makePolyline({
        mid: 'polylineMarketToStree',
        path: getGeoRoute('geoMarketToStree'),
        color: '#23527C',
        title: '[宮川朝市] 到 [上三之町]',
        infoCss: 'alert alert-danger',
        infoContent : '<div>[宮川朝市] 到 [上三之町]</div><div>車程約5分鐘</div>'
      });

    // [上三之町] 到 [美濃古街]
    _polylineStreeToMino = makePolyline({
        mid: 'polylineStreeToMino',
        path: getGeoRoute('geoStreeToMino'),
        color: '#23527C',
        title: '[上三之町] 到 [美濃古街]',
        infoCss: 'alert alert-danger',
        infoContent : '<div>[上三之町] 到 [美濃古街]</div><div>車程約108分鐘</div>'
      });

    // [美濃古街] 到 [機場]
    _polylineMinoToAirPlane = makePolyline({
        mid: 'polylineMinoToAirPlane',
        path: getGeoRoute('geoMinoToAirPlane'),
        color: '#23527C',
        title: '[美濃古街] 到 [機場]',
        infoCss: 'alert alert-danger',
        infoContent : '<div>[美濃古街] 到 [機場]</div><div>車程約55分鐘</div>'
      });
}

function initialMarkerAirPlane() {
    // 桃  園
    _markerFlyTY = makeMarker({
        mid: 'markerFlyTY',
        LatLng : new google.maps.LatLng(25.079185, 121.235247),
        iconColor : 'plane',
        title: '桃園國際機場',
        infoCss: 'alert',
        infoContent : '<div>\
                         <table class="table">\
                           <tr><th>日期</th><th>航空公司</th><th>航班</th><th>出發地點/時間</th><th>抵達地點/時間</th></tr>\
                           <tr><td>5/15(五)</td><td>國泰航空</td><td>CX530</td><td>桃　園 12:00</td><td>名古屋  15:30</td></tr>\
                           <tr><td>5/19(二)</td><td>國泰航空</td><td>CX531</td><td>名古屋 16:50</td><td>桃　園  19:20</td></tr>\
                         </table>\
                       </div>'
    });

    // 名古屋
    _markerFlyNY = makeMarker({
        mid: 'markerFlyTY',
        LatLng : new google.maps.LatLng(34.859869, 136.812368),
        iconColor : 'plane',
        title: '名古屋中部国際空港',
        infoCss: 'alert alert-info',
        infoContent : '<div>\
                         <table class="table">\
                           <tr><th>日期</th><th>航空公司</th><th>航班</th><th>出發地點/時間</th><th>抵達地點/時間</th></tr>\
                           <tr><td>5/15(五)</td><td>國泰航空</td><td>CX530</td><td>桃　園 12:00</td><td>名古屋  15:30</td></tr>\
                           <tr><td>5/19(二)</td><td>國泰航空</td><td>CX531</td><td>名古屋 16:50</td><td>桃　園  19:20</td></tr>\
                         </table>\
                       </div>'
    }); 
}

function initialStores() {
    // BIC CAMERA
    _markerBicCamera = [
        makeMarker({
            mid: 'markerBicCamera001',
            LatLng : new google.maps.LatLng(35.170134, 136.879859),
            iconColor : '',
            iconUrl : 'http://www.biccamera.co.jp/shoplist/img/icon/gm-marker-bic.png',
            title: 'ビックカメラ - 名古屋駅西店',
            infoContent : makeInfoWindowContent({
                Class: 'green', 
                Header:'ビックカメラ名古屋駅西店', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>営業時間</th><td>年中無休 AM10:00 - PM9:00</td></tr>\
                            <tr><th>住所</th><td>〒453-0015 愛知県名古屋市中村区椿町6−9</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.biccamera.co.jp/shoplist/shop-033.html" target="blank">名古屋駅西店</a></td></tr>\
                            <tr><th>Social</th>\
                              <td>\
                                <a target="blank" href="https://www.facebook.com/bic.nagoyaekinishi"><img alt="Facebook" src="http://www.biccamera.co.jp/shoplist/img/banner/facebook.png" style="height: 20px;"></img></a>\
                                <a target="blank" href="https://twitter.com/bic_nagoya"><img alt="Twitter" src="http://www.biccamera.co.jp/shoplist/img/banner/twitter.png" style="height: 20px;"></img></a>\
                              </td></tr>\
                          </table>'
            })
        })
    ];

    // 激安の殿堂
    _markerDonki = [
        makeMarker({
            mid: 'markerDonki001',
            LatLng : new google.maps.LatLng(35.148194, 136.892691),
            iconColor : '',
            iconUrl : 'http://www.donki.com/img/search/icn_store_donki2.png',
            title: '激安の殿堂 - パウ中川山王店',
            infoContent : makeInfoWindowContent({
                Class: 'warning', 
                Header:'激安の殿堂 - パウ中川山王店', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>営業時間</th><td nowrap>年中無休 AM10:00 - <span style="color:red">PM5:00</span></td></tr>\
                            <tr><th>住所</th><td>〒454-0011 愛知県名古屋市中川区山王4-5-5</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.donki.com/search/shop_detail.php?st_store_id=76" target="blank">パウ中川山王店</a></td></tr>\
                          </table>'
            })
        }),
        makeMarker({
            mid: 'markerDonki002',
            LatLng : new google.maps.LatLng(35.079448, 136.976718),
            iconColor : '',
            iconUrl : 'http://www.donki.com/img/search/icn_store_donki2.png',
            title: '激安の殿堂 - 緑店',
            infoContent : makeInfoWindowContent({
                Class: 'warning', 
                Header:'激安の殿堂 - 緑店', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>営業時間</th><td nowrap>年中無休 AM10:00 - AM1:00。別館 AM9:00 - PM9:00</td></tr>\
                            <tr><th>住所</th><td>〒458-0025 愛知県名古屋市緑区鳥澄1丁目401番地</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.donki.com/search/shop_detail.php?st_store_id=180" target="blank">緑店</a></td></tr>\
                          </table>'
            })
        }),
        makeMarker({
            mid: 'markerDonki003',
            LatLng : new google.maps.LatLng(35.170008, 136.906587),
            iconColor : '',
            iconUrl : 'http://www.donki.com/img/search/icn_store_donki2.png',
            title: '激安の殿堂 - 名古屋栄店',
            infoContent : makeInfoWindowContent({
                Class: 'warning', 
                Header:'激安の殿堂 - 名古屋栄店', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>営業時間</th><td nowrap>年中無休 24時間営業</td></tr>\
                            <tr><th>住所</th><td>〒460-0003 愛知県愛知県名古屋市中区錦3-17-15</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.donki.com/search/shop_detail.php?st_store_id=348" target="blank">名古屋栄店</a></td></tr>\
                          </table>'
            })
        }),
        makeMarker({
            mid: 'markerDonki004',
            LatLng : new google.maps.LatLng(35.226399, 136.909769),
            iconColor : '',
            iconUrl : 'http://www.donki.com/img/search/icn_store_donki2.png',
            title: '激安の殿堂 - 名古屋本店',
            infoContent : makeInfoWindowContent({
                Class: 'warning', 
                Header:'激安の殿堂 - 名古屋本店', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>営業時間</th><td nowrap>年中無休 AM9:00 - <span style="color:red">PM5:00</span></td></tr>\
                            <tr><th>住所</th><td>〒462-0018 愛知県名古屋市北区玄馬町234-1</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.donki.com/search/shop_detail.php?st_store_id=163" target="blank">名古屋本店</a></td></tr>\
                          </table>'
            })
        }),
        makeMarker({
            mid: 'markerDonki005',
            LatLng : new google.maps.LatLng(35.168679,136.936973),
            iconColor : '',
            iconUrl : 'http://www.donki.com/img/search/icn_store_donki2.png',
            title: '激安の殿堂 - 名古屋今池店',
            infoContent : makeInfoWindowContent({
                Class: 'warning', 
                Header:'激安の殿堂 - 名古屋今池店', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>営業時間</th><td nowrap>年中無休 24時間営業</td></tr>\
                            <tr><th>住所</th><td>〒464-0850 愛知県名古屋市千種区今池5-10-1</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.donki.com/search/shop_detail.php?st_store_id=335" target="blank">名古屋今池店</a></td></tr>\
                          </table>'
            })
        }),
        makeMarker({
            mid: 'markerDonki006',
            LatLng : new google.maps.LatLng(35.240026,136.848088),
            iconColor : '',
            iconUrl : 'http://www.donki.com/img/search/icn_store_donki2.png',
            title: '激安の殿堂 - 楽市街道名古屋店',
            infoContent : makeInfoWindowContent({
                Class: 'warning', 
                Header:'激安の殿堂 - 楽市街道名古屋店', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>営業時間</th><td nowrap>年中無休 AM10:00 - <span style="color:red">PM5:00</span></td></tr>\
                            <tr><th>住所</th><td>〒481-0045 愛知県北名古屋市中之郷神明45-1</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.donki.com/search/shop_detail.php?st_store_id=88" target="blank">楽市街道名古屋店</a></td></tr>\
                          </table>'
            })
        }),
        makeMarker({
            mid: 'markerDonki007',
            LatLng : new google.maps.LatLng(36.596153,136.639177),
            iconColor : '',
            iconUrl : 'http://www.donki.com/img/search/icn_store_donki2.png',
            title: '激安の殿堂 - パウ金沢店',
            infoContent : makeInfoWindowContent({
                Class: 'warning', 
                Header:'激安の殿堂 - パウ金沢店', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>営業時間</th><td nowrap>年中無休 AM9:00 - <span style="color:red">PM4:00</span></td></tr>\
                            <tr><th>住所</th><td>〒920-0064 石川県金沢市南新保町ニ16-1</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.donki.com/search/shop_detail.php?st_store_id=112" target="blank">パウ金沢店</a></td></tr>\
                          </table>'
            })
        }),
        makeMarker({
            mid: 'markerDonki008',
            LatLng : new google.maps.LatLng(36.551495,136.632307),
            iconColor : '',
            iconUrl : 'http://www.donki.com/img/search/icn_store_mega.gif',
            title: '激安の殿堂 - MEGAドン・キホーテ ラパーク金沢店',
            infoContent : makeInfoWindowContent({
                Class: 'warning', 
                Header:'激安の殿堂 - MEGAドン・キホーテ ラパーク金沢店', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>営業時間</th><td nowrap>年中無休 AM9:00 - <span style="color:red">AM0:00</span></td></tr>\
                            <tr><th>住所</th><td>〒921-8043 石川県金沢市西泉4-11</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.donki.com/search/shop_detail.php?st_store_id=200" target="blank">MEGAドン・キホーテ ラパーク金沢店</a></td></tr>\
                          </table>'
            })
        })
    ];

    // 宇宙船綠洲21(Oasis 21)
    _markerOasis21 = [
        makeMarker({
            mid: 'markerOasis21001',
            LatLng : new google.maps.LatLng(35.170975,136.909562),
            iconColor : '',
            iconUrl : 'http://www.sakaepark.co.jp/access/img/icon-Gmap2.png',
            title: '宇宙船綠洲21(Oasis 21)',
            infoContent : makeInfoWindowContent({
                Class: 'info', 
                Header:'宇宙船綠洲21(Oasis 21)', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>営業時間</th><td nowrap>年中無休 購物：AM10:00 - PM9:00。飲食：AM10:00 - PM10:00</td></tr>\
                            <tr><th>住所</th><td>〒461-0005 愛知県名古屋市東区東桜一丁目11番1号</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.sakaepark.co.jp/" target="blank">宇宙船綠洲21(Oasis 21)</a></td></tr>\
                          </table>'
            })
        })
    ];

    // Apple Store
    _markerAppleStore = [
        makeMarker({
            mid: 'markerAppleStore001',
            LatLng : new google.maps.LatLng(35.165437,136.907169),
            iconColor : '',
            iconUrl : 'http://images.apple.com/retail/locator/images/icons/default_blk_apple_pin.png',
            title: 'Apple Store - 名古屋栄',
            infoContent : makeInfoWindowContent({
                Class: 'info', 
                Header:'Apple Store - 名古屋栄', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>営業時間</th><td nowrap>月曜日 〜 日曜日：AM10:00 - PM9:00</td></tr>\
                            <tr><th>住所</th><td>〒460-0008 愛知県名古屋市中区栄3-17-15</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.apple.com/jp/retail/nagoyasakae/" target="blank">Apple Store - 名古屋栄</a></td></tr>\
                          </table>'
            })
        })
    ];

    // 松本清
    _markerMatsukiyo = [
        makeMarker({
            mid: 'markerMatsukiyo001',
            LatLng : new google.maps.LatLng(35.168377, 136.906244),
            iconColor : '',
            iconUrl : 'http://www.e-map.ne.jp/cgi/icon_select.cgi?cid=matukiyo&icon_id=1&dummy=1427218476084.gif',
            title: '松本清 - 栄スカイル店',
            infoContent : makeInfoWindowContent({
                Class: 'info', 
                Header:'松本清 - 栄スカイル店', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>定休日</th><td>1月1日、2月・8月の第3水曜日</td></tr>\
                            <tr><th>営業時間</th><td nowrap>AM10:00 - PM8:00</td></tr>\
                            <tr><th>住所</th><td>〒460-0008 愛知県名古屋市中区栄3-4-5 栄スカイルB2F</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.matsukiyo.co.jp" target="blank">栄スカイル店</a></td></tr>\
                          </table>'
            })
        }),
        makeMarker({
            mid: 'markerMatsukiyo002',
            LatLng : new google.maps.LatLng(35.168403, 136.895056),
            iconColor : '',
            iconUrl : 'http://www.e-map.ne.jp/cgi/icon_select.cgi?cid=matukiyo&icon_id=1&dummy=1427218476084.gif',
            title: '松本清 - 広小路伏見店',
            infoContent : makeInfoWindowContent({
                Class: 'info', 
                Header:'松本清 - 広小路伏見店', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>定休日</th><td>無休</td></tr>\
                            <tr><th>営業時間</th><td nowrap>AM8:00 - PM10:00(日・祝 AM8:00 - PM9:00)</td></tr>\
                            <tr><th>住所</th><td>〒460-0003 愛知県名古屋市中区錦1-19-32</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.matsukiyo.co.jp" target="blank">広小路伏見店</a></td></tr>\
                          </table>'
            })
        }),
        makeMarker({
            mid: 'markerMatsukiyo003',
            LatLng : new google.maps.LatLng(35.169056, 136.886560),
            iconColor : '',
            iconUrl : 'http://www.e-map.ne.jp/cgi/icon_select.cgi?cid=matukiyo&icon_id=1&dummy=1427218476084.gif',
            title: '松本清 - ミヤコ地下街店',
            infoContent : makeInfoWindowContent({
                Class: 'info', 
                Header:'松本清 - ミヤコ地下街店', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>定休日</th><td>無休</td></tr>\
                            <tr><th>営業時間</th><td nowrap>AM10:00 - PM9:30(日・祝 AM10:00 - PM9:00)</td></tr>\
                            <tr><th>住所</th><td>〒450-0002 愛知県名古屋市中村区名駅4丁目9番10号</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.matsukiyo.co.jp" target="blank">ミヤコ地下街店</a></td></tr>\
                          </table>'
            })
        }),
        makeMarker({
            mid: 'markerMatsukiyo004',
            LatLng : new google.maps.LatLng(35.170693, 136.882550),
            iconColor : '',
            iconUrl : 'http://www.e-map.ne.jp/cgi/icon_select.cgi?cid=matukiyo&icon_id=1&dummy=1427218476084.gif',
            title: '松本清 - 名古屋駅太閤通口店',
            infoContent : makeInfoWindowContent({
                Class: 'info', 
                Header:'松本清 - 名古屋駅太閤通口店', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>定休日</th><td>無休</td></tr>\
                            <tr><th>営業時間</th><td nowrap>AM7:00 - PM10:30(日・祝 AM7:00 - PM9:45)</td></tr>\
                            <tr><th>住所</th><td>〒450-0002 愛知県名古屋市中村区名駅1-1-4</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.matsukiyo.co.jp" target="blank">名古屋駅太閤通口店</a></td></tr>\
                          </table>'
            })
        }),
        makeMarker({
            mid: 'markerMatsukiyo005',
            LatLng : new google.maps.LatLng(36.578273, 136.647936),
            iconColor : '',
            iconUrl : 'http://www.e-map.ne.jp/cgi/icon_select.cgi?cid=matukiyo&icon_id=1&dummy=1427218476084.gif',
            title: '松本清 - 金沢駅西口店',
            infoContent : makeInfoWindowContent({
                Class: 'info', 
                Header:'松本清 - 金沢駅西口店', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>定休日</th><td>無休</td></tr>\
                            <tr><th>営業時間</th><td nowrap>AM9:30 - PM8:30（調剤薬局 AM9:30 - PM7:00）</td></tr>\
                            <tr><th>住所</th><td>〒920-0858 石川県金沢市木ノ新保町1-1　金沢百番街くつろぎ館2階</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.matsukiyo.co.jp" target="blank">金沢駅西口店</a></td></tr>\
                          </table>'
            })
        }),
        makeMarker({
            mid: 'markerMatsukiyo006',
            LatLng : new google.maps.LatLng(36.600093, 136.614335),
            iconColor : '',
            iconUrl : 'http://www.e-map.ne.jp/cgi/icon_select.cgi?cid=matukiyo&icon_id=1&dummy=1427218476084.gif',
            title: '松本清 - アピタタウン金沢ベイ店',
            infoContent : makeInfoWindowContent({
                Class: 'info', 
                Header:'松本清 - アピタタウン金沢ベイ店', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>定休日</th><td>無休</td></tr>\
                            <tr><th>営業時間</th><td nowrap>AM10:00 - PM9:00</td></tr>\
                            <tr><th>住所</th><td>〒920-0333 石川県金沢市無量寺4-56</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.matsukiyo.co.jp" target="blank">アピタタウン金沢ベイ店</a></td></tr>\
                          </table>'
            })
        })
    ];
    
    // ZERO GATE
    _markerZeroGate = [
        makeMarker({
            mid: 'markerAppleStore001',
            LatLng : new google.maps.LatLng(35.164177,136.907097),
            iconColor : '',
            iconUrl : 'http://www.parco.co.jp/img/common/header-logo.png',
            title: 'ZERO GATE - 名古屋',
            infoContent : makeInfoWindowContent({
                Class: 'info', 
                Header:'ZERO GATE - 名古屋', 
                Body:'<div class="StreetView" />',
                Footer : '<table class="table">\
                            <tr><th>営業時間</th><td nowrap>年中無休 AM10:00 - PM9:00</td></tr>\
                            <tr><th>住所</th><td>〒460-0008 愛知県名古屋市中区栄3-28-11</td></tr>\
                            <tr><th>Web site</th><td><a href="http://www.parco.co.jp/business/shoppingcomplex/zerogate.php" target="blank">ZERO GATE - 名古屋</a></td></tr>\
                          </table>'
            })
        })
    ];
}

function initialMeals() {
    $('#aMealsDay1').popover({
        content:'<table class="table table-condensed table-bordered table-hover" style="margin-bottom: 0px">\
                    <tbody>\
                        <tr><th nowrap>早餐</th><td nowrap>活力營養早餐</td></tr>\
                        <tr><th nowrap>午餐</th><td nowrap>機上套餐</td></tr>\
                        <tr><th nowrap>晚餐</th><td nowrap>自理</td></tr>\
                    </tbody>\
                </table>',
        html: true,
        trigger: 'focus'
    }).on('click', function(e){
        e.preventDefault();
        return false;
    });

    $('#aMealsDay2').popover({
        content:'<table class="table table-condensed table-bordered table-hover" style="margin-bottom: 0px">\
                    <tbody>\
                        <tr><th nowrap>早餐</th><td nowrap>飯店內享用</td></tr>\
                        <tr><th nowrap>午餐</th><td nowrap>妻籠宿鄉土風味御膳</td></tr>\
                        <tr><th nowrap>晚餐</th><td nowrap>自助式燒肉吃到飽+飲料暢飲</td></tr>\
                    </tbody>\
                </table>',
        html: true,
        trigger: 'focus'
    }).on('click', function(e){
        e.preventDefault();
        return false;
    });

    $('#aMealsDay3').popover({
        content:'<table class="table table-condensed table-bordered table-hover" style="margin-bottom: 0px">\
                    <tbody>\
                        <tr><th nowrap>早餐</th><td nowrap>飯店內享用</td></tr>\
                        <tr><th nowrap>午餐</th><td nowrap>立山風味餐</td></tr>\
                        <tr><th nowrap>晚餐</th><td nowrap>柿の匠海鮮鍋物料理</td></tr>\
                    </tbody>\
                </table>',
        html: true,
        trigger: 'focus'
    }).on('click', function(e){
        e.preventDefault();
        return false;
    });

    $('#aMealsDay4').popover({
        content:'<table class="table table-condensed table-bordered table-hover" style="margin-bottom: 0px">\
                    <tbody>\
                        <tr><th nowrap>早餐</th><td nowrap>飯店內享用</td></tr>\
                        <tr><th nowrap>午餐</th><td nowrap>飛驒牛朴葉味熷燒御膳</td></tr>\
                        <tr><th nowrap>晚餐</th><td nowrap>日式迎賓會席料理+卡拉OK歡唱</td></tr>\
                    </tbody>\
                </table>',
        html: true,
        trigger: 'focus'
    }).on('click', function(e){
        e.preventDefault();
        return false;
    });

    $('#aMealsDay5').popover({
        content:'<table class="table table-condensed table-bordered table-hover" style="margin-bottom: 0px">\
                    <tbody>\
                        <tr><th nowrap>早餐</th><td nowrap>飯店內享用</td></tr>\
                        <tr><th nowrap>午餐</th><td nowrap>自理</td></tr>\
                        <tr><th nowrap>晚餐</th><td nowrap>機上套餐</td></tr>\
                    </tbody>\
                </table>',
        html: true,
        trigger: 'focus'
    }).on('click', function(e){
        e.preventDefault();
        return false;
    });
}
