function build_card(album) {
  const html = `
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
    <a class="text-decoration-none text-reset" href="./detalhe_album.html?id=${album.id}">
      <div class="card">
        <img src="${album.cover}" class="card-img-top" alt="${album.name}">
        <div class="card-body">
          <h5 class="card-title text-truncate">${album.name}</h5>
          <p class="card-text line-clamp-3">${album.description}</p>
        </div>
      </div>
    </a>
  </div>
  `;
  return html;
}

function album_render(json) {
  let html_cards = "";
  json.forEach((item) => {
    html_cards += build_card(item);
  });
  let ac = document.getElementById("albun-container");
  ac.innerHTML = html_cards;
}
