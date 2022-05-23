// Initialize and add the map
function initMap() {

    // The location of Geeksforgeeks office
    const restaurant_loc = {
        lat: 48.13247,
        lng: 11.54319
    };

    // Create the map, centered at restaurant_loc
    const map = new google.maps.Map(
        document.getElementById("map"), {

        // Set the zoom of the map
        zoom: 16,
        center: restaurant_loc,
    });

    var marker = new google.maps.Marker({
        position: { lat: 48.13247, lng: 11.54319 },
        map: map
    });
}