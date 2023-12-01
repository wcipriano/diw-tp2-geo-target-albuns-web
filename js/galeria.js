function carousel_render(array_data) {
  const dest_ind = document.getElementById("destaques-indicators");
  const dest_itm = document.getElementById("destaques-items");
  if (!dest_ind) return;
  let html_indic = "";
  let html_items = "";
  let active = "";
  for (let i = 0; i < array_data.length; i++) {
    let item = array_data[i];
    if (item.album) item = item.album;
    var id = item.id;
    var name = item.name || item.description;
    var photo = item.cover || item.image;
    var desc = item.description;
    active = i == 0 ? ' class="active" aria-current="true"' : "";
    html_indic += `<button type="button" data-bs-target="#carouselInd" data-bs-slide-to="${i}"${active}></button>`;
    html_items += `
          <div id="carousel-item-${id}" class="carousel-item-home carousel-item ${
      active != "" ? "active" : ""
    }">
            <a href="./detalhe_album.html?id=${id}">
              <img src="${photo}" class="d-block w-100" alt="${name}">
            </a>
            <div class="carousel-caption d-none d-md-block">
              <h5>${name}</h5>
              <p class="text-truncate">${desc}</p>
            </div>
          </div>
          `;
  }
  dest_ind.innerHTML = html_indic;
  dest_itm.innerHTML = html_items;
}
