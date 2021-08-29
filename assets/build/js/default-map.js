$(document).ready(function() {
    ymaps.ready(initializeDefaultMap);
});

function initializeDefaultMap() {
    if ($('#map').length>0) {

        var myMap = new ymaps.Map("map", {
            center:[53.899888,27.566757],
            zoom: 13,
            controls: []
        }, {
	        suppressMapOpenBlock: true
	    }); 
                
        var myPlacemark = new ymaps.Placemark([53.899888,27.566757],{
            },{
            iconLayout: 'default#image',
            // iconImageHref: "img/svg/label.svg", 
            // iconImageSize: [52,78],
            // iconImageOffset: [-26, -78]
        }); 


        myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 20, top: 50 }}}));
        myMap.behaviors.disable('scrollZoom');

        myMap.geoObjects.add(myPlacemark);
    }
}