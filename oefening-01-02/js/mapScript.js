/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
* Verander in de code online alle "var" in "let".
*/
// Initialize the map
let map = L.map('apMap').setView([51.23009, 4.41616], 17);
let marker = L.marker([51.23009, 4.41616]).addTo(map);
marker.bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33").openPopup();
 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
 
// define rectangle geographical bounds
var bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];
 
L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);
map.fitBounds(bounds);
 
// bepaal de rechthoek rondom het gebouw van AP
// kleur de rechthoek in met de rode AP-kleur
L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);
map.fitBounds(bounds);


// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
