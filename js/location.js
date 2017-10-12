google.maps.event.addDomListener(window, 'load', function() {
            var places = new google.maps.places.Autocomplete(document.getElementById('location1'));
            google.maps.event.addListener(places, 'place_changed', function() {
                var place = places.getPlace();
                var address = place.formatted_address;
                var latitude = place.geometry.location.lat();
                var longitude = place.geometry.location.lng();
                document.getElementById("lat1").value = (latitude);
                document.getElementById("longe1").value = (latitude);
            });
        });


        google.maps.event.addDomListener(window, 'load', function() {
            var places = new google.maps.places.Autocomplete(document.getElementById('location2'));
            google.maps.event.addListener(places, 'place_changed', function() {
                var place = places.getPlace();
                var address = place.formatted_address;
                var latitude = place.geometry.location.lat();
                var longitude = place.geometry.location.lng();
                document.getElementById("lat2").value = (latitude);
                document.getElementById("longe2").value = (latitude);
            });
        });