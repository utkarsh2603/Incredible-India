const apiKey='pk.eyJ1IjoidHNqMjAwMiIsImEiOiJja3MxbDN3Z3QweWdyMnZwamV1aG1wOXZnIn0.VXevg6JOSXIUj5E6KbDXYQ'

const mymap = L.map('map').setView([10.899915, 73.154658], 9.4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);

//red for ze kapitol
var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

//markers
const m1 = L.marker([11.2241,72.7762]).addTo(mymap);//kadmat
const m2 = L.marker([11.5984938434408, 72.18580295314864]).addTo(mymap);//bitra
const m3 = L.marker([11.6907,72.7112]).addTo(mymap);//chetlat
const m4 = L.marker([11.4839,73.0066]).addTo(mymap);//kilthan
const m5 = L.marker([10.9471,72.3185]).addTo(mymap);//tinnakara
const m6 = L.marker([10.9365,72.2882]).addTo(mymap);//bangaram
const m7 = L.marker([11.1142,72.7204]).addTo(mymap);//amini
const m8 = L.marker([10.8576,72.1934]).addTo(mymap);//agatti
const m9 = L.marker([10.5593,72.6358],{icon: redIcon}).addTo(mymap);//kavaratti
const m10 = L.marker([10.128778, 72.327482]).addTo(mymap);//suheli
const m11 = L.marker([10.0665,73.6448]).addTo(mymap);//kalpeni
const m12 = L.marker([10.8126,73.6801]).addTo(mymap);//andrott
const m13 = L.marker([8.2740,73.0496]).addTo(mymap);//minicoy

//popups
let t1 = `
<h3 style="margin-left:0">Kadmat</h3>
<div style="text-align:center">
    <img style="max-width:100%; width:100%" src="./assets/mapim/kadma.jpg"/>
</div> 
<p style="margin-top:10px; margin-bottom:0;"><b>Glance : </b> Kadamat has been identified for staying tourists with its tourist
aesthetically situated in the coconut palm groves in the beaches facing
the lagoon. <br>
<b>Location : </b>11°-13* North Latitude 72°-47* East longitude <br>
<b>Land Area : </b>3.12 sq km <br> 
</p><p style="text-align: end; margin-top:0; color:black;">
<a href="./html/activities.html#focal"><b style="color:black;text-decoration: underline;">Know More ></b></a> 
</p>
`
let t2 = `
<h3 style="margin-left:0">Bitra</h3>
<div style="text-align:center">
    <img style="max-width:100%; width:100%" src="./assets/mapim/bitra.jpg"/>
</div> 
<p style="margin-top:10px; margin-bottom:0;"><b>Glance : </b>It is the smallest inhabited island in the territory. There is a small
shrine of an old Arab Saint which is a place of pilgrimage for the people
of other islands. <br>
<b>Location : </b>11°- 36* North Latitude 72°- 10* East longitude
<br>
<b>Land Area : </b>0.105 sq km </p>
<p style="text-align: end; margin-top:0; color:black;">
<a href="./html/activities.html#focal"><b style="color:black;text-decoration: underline;">Know More ></b></a> 
</p>
`
let t3 = `
<h3 style="margin-left:0">Chetlat</h3>
<div style="text-align:center">
    <img style="max-width:100%; width:100%" src="./assets/mapim/chetlat.jpg"/>
</div> 
<p style="margin-top:10px; margin-bottom:0;"><b>Glance : </b> A quiet place for long walks on pristine shorelines swaying by
the coconut tree gardens under the oblique sun while surrounded by the
gleaming turquoise ocean.<br>
<b>Location : </b> 11°- 41* North Latitude 72°- 43* East longitude <br>
<b>Land Area : </b>1.4 sq km
</p>
<p style="text-align: end; margin-top:0; color:black;">
<a href="./html/activities.html#focal"><b style="color:black;text-decoration: underline;">Know More ></b></a> 
</p>
`
let t4 = `
<h3 style="margin-left:0">Kilthan</h3>
<div style="text-align:center">
    <img style="max-width:100%; width:100%" src="./assets/mapim/kilthan.jpg"/>
</div> 
<p style="margin-top:10px; margin-bottom:0;"><b>Glance : </b>Attractive by its thick flora, the summer nights in kilthan are
warmer and it is usual for the people to sleep outside on the beaches.
This place is known for its rich tradition of folk dances. <br>
<b>Location : </b>11°- 29* North Latitude 73°- 04* East longitude <br>
<b>Land Area : </b>2.2 sq km
</p>
<p style="text-align: end; margin-top:0; color:black;">
<a href="./html/activities.html#focal"><b style="color:black;text-decoration: underline;">Know More ></b></a> 
</p>
`
let t5 = `
<h3 style="margin-left:0">Tinnakara</h3>
<div style="text-align:center">
    <img style="max-width:100%; width:100%" src="./assets/mapim/tinnakara.jpg"/>
</div> 
<p style="margin-top:10px; margin-bottom:0;"><b>Glance : </b>The panorama encompasses magnificent lagoons, sun drenched
sand and spectacular marine flora and fauna.<br>
<b>Location : </b>10.9471° N, 72.3185° E<br>
<b>Land Area : </b>2.3 sq km
</p>
<p style="text-align: end; margin-top:0; color:black;">
<a href="./html/activities.html#focal"><b style="color:black;text-decoration: underline;">Know More ></b></a> 
</p>
`
let t6 = `
<h3 style="margin-left:0">Bangaram</h3>
<div style="text-align:center">
    <img style="max-width:100%; width:100%" src="./assets/mapim/bangaram.png"/>
</div> 
<p style="margin-top:10px; margin-bottom:0;"><b>Glance : </b>A bewitchingly beautiful and breath-taking island in
Lakshadweep. Sparkling coral reef and blue lagoon perform magic on the
soul searching travellers.<br>
<b>Location : </b> 10°- 56* North Latitude and 72°- 17* East longitude<br>
<b>Land Area : </b>2.3 sq km</p>
<p style="text-align: end; margin-top:0; color:black;">
<a href="./html/activities.html#focal"><b style="color:black;text-decoration: underline;">Know More ></b></a> 
</p>
`
let t7 = `
<h3 style="margin-left:0">Amini</h3>
<div style="text-align:center">
    <img style="max-width:100%; width:100%" src="./assets/mapim/amini.png"/>
</div> 
<p style="margin-top:10px; margin-bottom:0;"><b>Glance : </b> It is known for its talented craftsmen for making walking sticks
with tortoise shells and coconut shells and has a rich tradition of folk
songs.<br>
<b>Location : </b>11°- 07* North Latitude 72°- 44* East longitude<br>
<b>Land Area : </b>2.6 sq km</p>

`
let t8 = `
<h3 style="margin-left:0">Agatti</h3>
<div style="text-align:center">
    <img style="max-width:100%; width:100%" src="./assets/mapim/agatti.jpg"/>
</div> 
<p style="margin-top:10px; margin-bottom:0;"><b>Glance : </b>It is one of the most beautiful lagoons in Lakshadweep with the
airport built on this island.<br>
<b>Location : </b>10°- 51* North Latitude 72° longitude<br>
<b>Land Area : </b>3.84 sq km
</p>
<p style="text-align: end; margin-top:0; color:black;">
<a href="./html/activities.html#focal"><b style="color:black;text-decoration: underline;">Know More ></b></a> 
</p>
`
let t9 = `
<h3 style="margin-left:0">Kavaratti</h3>
<div style="text-align:center">
    <img style="max-width:100%; width:100%" src="./assets/mapim/kavaratti.jpg"/>
</div> 
<p style="margin-top:10px; margin-bottom:0;"><b>Glance : </b> The capital of Lakshadweep island, known for its sand beaches and calm lagoons.<br>
<b>Location : </b> 10° 32’ and 10° 35’ North latitude and 72° 35’ and 72° 40’ East
longitude<br>
<b>Land Area : </b>4.22 sq km</p>
<p style="text-align: end; margin-top:0; color:black;">
<a href="./html/activities.html#focal"><b style="color:black;text-decoration: underline;">Know More ></b></a> 
</p>
`
let t10 = `
<h3 style="margin-left:0">Suheli</h3>
<div style="text-align:center">
    <img style="max-width:100%; width:100%" src="./assets/mapim/suheli.jpg"/>
</div> 
<p style="margin-top:10px; margin-bottom:0;"><b>Glance : </b>It has a breathtaking view with sparkling coral reef, lush green
coconut palms and silvery beaches.<br>
<b>Location : </b>10° 05’ North latitude and 72° 17’ East longitude<br>
<b>Land Area : </b>0.88 sq km </p>
<p style="text-align: end; margin-top:0; color:black;">
<a href="./html/activities.html#focal"><b style="color:black;text-decoration: underline;">Know More ></b></a> 
</p>
`
let t11 = `
<h3 style="margin-left:0">Kalpeni</h3>
<div style="text-align:center">
    <img style="max-width:100%; width:100%" src="./assets/mapim/kalpeni.jpg"/>
</div> 
<p style="margin-top:10px; margin-bottom:0;"><b>Glance : </b>One can swim, snorkel or reef-walk in the vast lagoon and
indulge in water sports on kayaks, sailboats and pedal boats.<br>
<b>Location : </b>10°- 05* North Latitude and 73°- 39* East latitude<br>
<b>Land Area : </b>3.08 sq km
</p>
<p style="text-align: end; margin-top:0; color:black;">
<a href="./html/activities.html#focal"><b style="color:black;text-decoration: underline;">Know More ></b></a> 
</p>
`
let t12 = `
<h3 style="margin-left:0">Andrott</h3>
<div style="text-align:center">
    <img style="max-width:100%; width:100%" src="./assets/mapim/andrott.jpg"/>
</div> 
<p style="margin-top:10px; margin-bottom:0;"><b>Glance : </b>It is the largest island in Lakshadweep. The tomb of Hazrat
Ubaidullah and the Buddhist archaeological remains to be the attraction
of the island.<br>
<b>Location : </b>10°- 49* North Latitude 73°- 41* East longitude<br>
<b>Land Area : </b>4.9 sq km</p>
<p style="text-align: end; margin-top:0; color:black;">
<a href="./html/activities.html#focal"><b style="color:black;text-decoration: underline;">Know More ></b></a> 
</p>
`
let t13 = `
<h3 style="margin-left:0">Minicoy</h3>
<div style="text-align:center">
    <img style="max-width:100%; width:100%" src="./assets/mapim/minicoy.jpg"/>
</div> 
<p style="margin-top:10px; margin-bottom:0;"><b>Glance : </b>The light house of the island is the main attraction along with
long drives through dense coconut groves and winding village roads. It’s
a place to swim, beach walk, pedal boat, kayak and sail.<br>
<b>Location : </b>8°- 17* North Latitude 73°- 04* East longitude<br>
<b>Land Area : </b>4.8 sq km</p>
<p style="text-align: end; margin-top:0; color:black;">
<a href="./html/activities.html#focal"><b style="color:black;text-decoration: underline;">Know More ></b></a> 
</p>
`

//popup decl
m1.bindPopup(t1);
m2.bindPopup(t2);
m3.bindPopup(t3);
m4.bindPopup(t4);
m5.bindPopup(t5);
m6.bindPopup(t6);
m7.bindPopup(t7);
m8.bindPopup(t8);
m9.bindPopup(t9);
m10.bindPopup(t10);
m11.bindPopup(t11);
m12.bindPopup(t12);
m13.bindPopup(t13);

//labels
m1.bindTooltip("Kadmat", {permanent: true, className: "my-label", offset: [0, 0] });
m2.bindTooltip("Bitra", {permanent: true, className: "my-label", offset: [0, 0] });
m3.bindTooltip("Chetlat", {permanent: true, className: "my-label", offset: [0, 0] });
m4.bindTooltip("Kilthan", {permanent: true, className: "my-label", offset: [0, 0] });
m5.bindTooltip("Tinnakara", {permanent: true, className: "my-label", offset: [-15, -5], direction: 'top'});
m6.bindTooltip("Bangaram", {permanent: true, className: "my-label", offset: [-16, 23], direction: 'bottom' });
m7.bindTooltip("Amini", {permanent: true, className: "my-label", offset: [0, 0] });
m8.bindTooltip("Agatti", {permanent: true, className: "my-label", offset: [-20, 20], direction: 'left'});
m9.bindTooltip("Kavaratti", {permanent: true, className: "my-label", offset: [9, -23] });
m10.bindTooltip("Suheli", {permanent: true, className: "my-label", offset: [0, 0] });
m11.bindTooltip("Kalpeni", {permanent: true, className: "my-label", offset: [0, 0] });
m12.bindTooltip("Andrott", {permanent: true, className: "my-label", offset: [0, 0] });
m13.bindTooltip("Minicoy", {permanent: true, className: "my-label", offset: [0, 0] });

m1.addTo(map);
m2.addTo(map);
m3.addTo(map);
m4.addTo(map);
m5.addTo(map);
m6.addTo(map);
m7.addTo(map);
m8.addTo(map);
m9.addTo(map);
m10.addTo(map);
m11.addTo(map);
m12.addTo(map);
m13.addTo(map);