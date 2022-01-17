
		//google map on contact page
				var map;
				$(document).ready(function(){
				  map = new GMaps({
					el: '#map',
					lat: -12.043333,
					lng: -77.028333
				  });
				  var path = [
						[-12.040397656836609,-77.03373871559225],
						[-12.040248585302038,-77.03993927003302],
						[-12.050047116528843,-77.02448169303511],
						[-12.044804866577001,-77.02154422636042]
					  ];
			
				  polygon = map.drawPolygon({
					paths: path,
					strokeColor: '#BBD8E9',
					strokeOpacity: 1,
					strokeWeight: 3,
					fillColor: '#BBD8E9',
					fillOpacity: 0.6
				  });
			
				  var circle = map.drawCircle({
					lat: -12.040504866577001,
					lng: -77.02024422636042,
					radius: 350,
					strokeColor: '#ccc',
					strokeOpacity: 1,
					strokeWeight: 3,
					fillColor: '#189f97',
					fillOpacity: 0.6
				  });
			
				  map.addMarker({
					lat: -12.043333,
					lng: -77.028333,
					draggable: true,
					fences: [polygon],
					outside: function(m, f){
					  alert('This marker has been moved outside of its fence');
					}
				  });
			
				  map.addMarker({
					lat: -12.040504866577001,
					lng: -77.02024422636042,
					draggable: true,
					fences: [circle],
					outside: function(m, f){
					  alert('This marker has been moved outside of its fence');
					}
				  });
				});
