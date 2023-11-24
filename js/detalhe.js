function get_id() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}
function set_html(id, content, title) {
  const elem = document.getElementById(id);
  if (elem && id != "album_container_capa") {
    elem.innerHTML = content;
  } else if (elem && id == "album_container_capa") {
    elem.innerHTML = `<img src="${content}" class="img-fluid rounded-start" alt="${title}" title="${title}"></img>`;
  }
}

function get_album_data() {
  const idAlbum = get_id();
  const url = `https://api-albuns.wagnercipriano.repl.co/albums/${idAlbum}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((album) => {
      console.log(album);
      //Set descrição do album
      set_html("album_name", album.name);
      set_html("album_desc", album.description);
      set_html("album_location", album.location_name);
      set_html("album_date", album.date);
      set_html("album_container_capa", album.cover, album.name);
    });
}

function get_html_foto(foto) {
  const html = `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
      <a class="text-decoration-none" href="https://www.facebook.com/ciprianowagner/" type="button"
        data-bs-toggle="modal" data-bs-target="#modal-fotos">
        <div class="card">
          <img src="${foto.image}" class="card-img-top" alt="imagem card 1">
          <div class="card-body">
            <small class="card-text">${foto.description}</small>
          </div>
        </div>
      </a>
    </div>
  `;
  return html;
}

function get_fotos() {
  const idAlbum = get_id();
  console.log("idAlbum:", idAlbum);
  const url = `https://api-albuns.wagnercipriano.repl.co/photos?albumId=${idAlbum}&`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((array_data) => {
      console.log(array_data);
      const container = document.getElementById("album_container_foto");
      let html = "";
      array_data.forEach((item) => {
        html += get_html_foto(item);
      });
      container.innerHTML = html;
    });
}

window.addEventListener("load", () => {
  get_album_data();
  get_fotos();
});
