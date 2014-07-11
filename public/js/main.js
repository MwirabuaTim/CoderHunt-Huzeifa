var map = L.mapbox.map('map', 'huzeifa.imn15b25', {minZoom:2}).setView([40, 0], 2);
			
			var markers = new L.MarkerClusterGroup();
			
			var r = new XMLHttpRequest();
			r.open("GET", "api.json", true);
			r.onreadystatechange = function () {
				var mapArray = [];
				if(r.readyState != 4 || r.status != 200) return;
				_.each(JSON.parse(r.responseText), function(key) {
					var mapData = (key.map).split(',');
					if(mapData[0] && mapData[1]) {
						var lat = parseFloat(mapData[0]),
							lng = parseFloat(mapData[1]);
						//mapArray.push([lat, lng]);
						var marker = new L.Marker([lat, lng])
						var html = '<strong>' + key.first_name + ' ' + key.last_name + '</strong>';
						marker.bindPopup(html);
						markers.addLayer(marker);
					}
				})
				//console.log(mapArray);
			};
		r.send(null);
			
		map.addLayer(markers);
