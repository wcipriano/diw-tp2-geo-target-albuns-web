function get_destaques() {
  const url =
    "https://api-albuns.wagnercipriano.repl.co/highlights?_expand=album";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((array_data) => {
      const dest_ind = document.getElementById("destaques-indicators");
      const dest_itm = document.getElementById("destaques-items");
      if (!dest_ind) return;
      let html_indic = "";
      let html_items = "";
      let active = "";
      for (let i = 0; i < array_data.length; i++) {
        if (!array_data[i].album) continue;
        let album = array_data[i].album;
        active = i == 0 ? ' class="active" aria-current="true"' : "";
        html_indic += `<button type="button" data-bs-target="#carouselInd" data-bs-slide-to="${i}"${active}></button>`;
        html_items += `
          <div id="carousel-item-home" class="carousel-item ${
            active != "" ? "active" : ""
          }">
            <a href="./detalhe_album.html?id=${album.id}">
              <img src="${album.cover}" class="d-block w-100" alt="${
          album.name
        }">
            </a>
            <div class="carousel-caption d-none d-md-block">
              <h5>${album.name}</h5>
              <p class="text-truncate">${album.description}</p>
            </div>
          </div>
          `;
      }
      dest_ind.innerHTML = html_indic;
      dest_itm.innerHTML = html_items;
    });
}

window.addEventListener("load", () => {
  get_destaques();
});
