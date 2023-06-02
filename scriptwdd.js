

mapboxgl.accessToken ='pk.eyJ1IjoiaWtyb21vdjAyMiIsImEiOiJjbGhkZDl4OXUwcGEwM2ZuNGJyanoweTl5In0.J_klY3qiphsxK3vtiIyGiw';
    
let loc =[14.433877113495793, 50.086968114953635]
let map = new mapboxgl.Map({
    container: 'map',
    center: loc,
    zoom:13, 
    style: 'mapbox://styles/mapbox/dark-v10'
});
map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());

let marker = document.createElement('div');
marker.id = 'marker';

let popup = new mapboxgl.Popup().setText('Prague City University')

new mapboxgl.Marker(marker, {anchor: 'bottom'})
.setLngLat(loc)
.addTo(map)
.setPopup(popup);
