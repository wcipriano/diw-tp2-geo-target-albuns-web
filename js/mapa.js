// funcao que adiciona um marcador para cada unidade
function addMarker(map, label, url, coordenadas) {
  var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    `<h3><a href="${url}" target="_blank">${label}</a></h3><br>`
  );
  const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(coordenadas)
    .setPopup(popup)
    .addTo(map);
}

function get_map() {
  // Defini o ponto central do mapa
  const centralLatLong = [-0.13628966599153391, 51.519];

  // ----------------------------------------------
  // Utilize sua accessToken trocando o valor na linha abaixo
  mapboxgl.accessToken =
    "pk.eyJ1Ijoicm9tbWVsY2FybmVpcm8iLCJhIjoiY2xvb2E4djRwMTQwNjJpczZ4ZmVkeWZmdSJ9.K3Tr0HYjXfayqurPewZOZQ";
  // mapboxgl.accessToken = "pk.eyJ1IjoiYWxvb2thdG9tbW9yb3ciLCJhIjoiNGM4ODhkZjUwMGM1ZDE4M2VjNzQ4MmQ4ODcxMjk5ZjMifQ.XVvFc8kl-0z4NAblE-mNqw";
  // mapboxgl.accessToken = "pk.eyJ1IjoiYmVuZWhta2UiLCJhIjoiY2plYTl6b3c2MHg5ODJxbGV4aXR4Z3p6YSJ9.d3jSAbsqSmpJwyVcp9iXbw";

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: centralLatLong,
    zoom: 11,
  });
  return map;
}

function get_card_marker(album) {
  return `
    <a class="text-decoration-none text-reset" href="./detalhe_album.html?id=${album.id}" target="_blank">
      <img src="${album.cover}" class="card-img-top" alt="${album.name}">
      <div class="card-body">
        <h5 class="card-title text-truncate">${album.name}</h5>
        <p class="card-text">${album.location_name}</p>
      </div>
    </a>`;
}

function map_render(array_data) {
  const map = get_map();
  array_data.forEach((item) => {
    var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
      get_card_marker(item)
    );
    const marker = new mapboxgl.Marker({ color: "blue" })
      .setLngLat(item.location_coordinates)
      .setPopup(popup)
      .addTo(map);
  });
}
