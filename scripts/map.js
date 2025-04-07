function initMap() {
    
}

function showMap() {
    let address = document.getElementById("AddressId").value;
    let city = document.getElementById("CityId").value;
    console.log(address);
    console.log(city);
    let place = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
    let iframeElement = document.getElementById('map-frame');
    iframeElement.src = place;
}



