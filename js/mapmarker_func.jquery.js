		//set up markers 
		var myMarkers = {"markers": [
				{"latitude": "45.506010", "longitude":"-73.576419", "icon": "images/map-icon.png"}
			]
		};
		
		//set up map options
		$("#map").mapmarker({
			zoom	: 14,
			center	: 'Montreal',
			markers	: myMarkers
		});

