function save_contact() {
    var adh = {
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        naissance: document.getElementById("naissance").value,
        activite: document.getElementById("activite").value,
        tel: document.getElementById("tel").value,
        email: document.getElementById("email").value
    }



    sessionStorage.clear();
    localStorage.clear();
    localStorage.setItem(adh.email, JSON.stringify(adh));

    add_content("Confirmation !", "<div id='infos'>Merci " + adh.prenom + " ! </div>");

    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("naissance").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("email").value = "";
    document.getElementById("activite").value = "";

    check_user();
    
    return false;
}


function load_map() {
    var mapOptionsSatellite = {
        panControl: true,
        streetViewControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: false,
        overviewMapControl: false,
        gestureHandling: 'greedy'
    };

    map = new google.maps.Map(
        document.getElementById('map'),
        mapOptionsSatellite
    );

    mZoom = 18;
    map.setCenter(new google.maps.LatLng(18.539553, -72.341276));
    map.setZoom(mZoom);

    var latlng = (new google.maps.LatLng(18.539553, -72.341276));

    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
    });

    var content = `
        <h3>ARCSO</h3>
        <ul id="map_address">
            <li><img class="icon" src="images/marker.png" alt="marker" />Rue Mgr Guilloux <Br/> Port-au-Prince, Haiti</li>
            <li><img class="icon" src="images/phone.png" alt="phone"/>+509 36 91 0311</li>
            <li><img class="icon" src="images/phone.png" alt="phone" />+509 40 40 7246</li>
            <li><img class="icon" src="images/envelope.png" alt="envelope" />info@arcso.ht</li>
        </ul>
    `;
    var info_window = new google.maps.InfoWindow();
    info_window.setContent(content);
    info_window.open(map, marker);
}

load_map();
