// Initialize and add the map
function initMap() {

    // The location of Geeksforgeeks office
    const restaurant_loc = {
        lat: 48.135124,
        lng: 11.581981
    };

    // Create the map, centered at restaurant_loc
    const map = new google.maps.Map(
        document.getElementById("map"), {

        // Set the zoom of the map
        zoom: 17.56,
        center: restaurant_loc,
    });
}