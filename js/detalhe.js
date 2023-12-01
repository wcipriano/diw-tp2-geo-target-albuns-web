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
  if (!idAlbum) return;
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

function get_album_data(album) {
  //Set name, desc, location, date
  set_html("album_name", album.name);
  set_html("album_desc", album.description);
  set_html("album_location", album.location_name);
  set_html("album_date", album.date);
  //set cover
  set_html("album_container_capa", album.cover, album.name);
  //set destaque
  set_destaque(album.highlights);
}

function get_html_foto(foto) {
  const html = `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
      <a class="text-decoration-none" href="https://www.facebook.com/ciprianowagner/" type="button"
        data-bs-toggle="modal" data-bs-target="#modal-fotos" onclick="set_foto(${foto.id})">
        <div class="card">
          <img src="${foto.image}" class="card-img-top" alt="imagem card 1">
          <div class="card-body">
            <small class="card-text line-clamp-3">${foto.description}</small>
          </div>
        </div>
      </a>
    </div>
  `;
  return html;
}

function photos_render(array_data) {
  const container = document.getElementById("album_container_foto");
  let html = "";
  array_data.forEach((item) => {
    html += get_html_foto(item);
  });
  if (!html)
    html = `<div class="alert alert-light" role="alert">Nenhuma foto disponível</div>`;
  container.innerHTML = html;
}

function set_foto(id) {
  //carrega a foto correta para visualização na galeria (a foto clicada)
  const foto_list = document.getElementsByClassName("carousel-item-home");
  for (let i = 0; i < foto_list.length; i++) {
    foto_list[i].classList.remove("active");
  }
  document.getElementById(`carousel-item-${id}`).classList.add("active");
}

function slide_change(e) {
  if (e.keyCode === 37) {
    // Previous
    document.getElementsByClassName("carousel-control-prev")[0]?.click();
    return false;
  }
  if (e.keyCode === 39) {
    // Next
    document.getElementsByClassName("carousel-control-next")[0]?.click();
    return false;
  }
}

window.addEventListener("keydown", (e) => {
  slide_change(e);
});

window.addEventListener("load", () => {
  const idAlbum = get_id();

  get_album(idAlbum).then((json) => {
    // Album data render
    get_album_data(json);
    // Photo galery render
    photos_render(json.photos);
    // Carousel render
    carousel_render(json.photos);
  });
});
