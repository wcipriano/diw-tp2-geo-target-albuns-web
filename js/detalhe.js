const urlBase = "https://api-albuns.wagnercipriano.repl.co";
let idDestaque = null;

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

function set_destaque(highlights) {
  const elem = document.getElementById("album_destaque");
  if (highlights && highlights[0]) {
    elem.checked = true;
    idDestaque = highlights[0].id;
  }
}

function add_destaque() {
  const idAlbum = parseInt(get_id());
  const url = `${urlBase}/highlights`;
  const data = { albumId: idAlbum };
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  fetch(url, request).then((response) => {
    console.log(response);
  });
  return true;
}

function remove_destaque() {
  const url = `${urlBase}/highlights/${idDestaque}`;
  const request = { method: "DELETE" };
  fetch(url, request).then((response) => {
    console.log(response);
  });
  return true;
}

function update_destaque(elem) {
  let resp = false;
  if (elem.checked) {
    resp = add_destaque();
  } else if (idDestaque) {
    resp = remove_destaque();
  }
  if (!resp) elem.checked = !elem.checked;
}

function get_album_data() {
  const idAlbum = get_id();
  const url = `${urlBase}/albums/${idAlbum}?_embed=highlights`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((album) => {
      //Set name, desc, location, date
      set_html("album_name", album.name);
      set_html("album_desc", album.description);
      set_html("album_location", album.location_name);
      set_html("album_date", album.date);
      //set cover
      set_html("album_container_capa", album.cover, album.name);
      //set destaque
      set_destaque(album.highlights);
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
  const url = `${urlBase}/photos?albumId=${idAlbum}&`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((array_data) => {
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
