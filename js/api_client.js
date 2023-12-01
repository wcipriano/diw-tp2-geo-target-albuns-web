const urlBase = "https://api-albuns.wagnercipriano.repl.co";

async function get_albums() {
  const url = `${urlBase}/albums`;
  return fetch(url).then((response) => {
    return response.json();
  });
}

async function get_album(idAlbum) {
  const url = `${urlBase}/albums/${idAlbum}?_embed=highlights&_embed=photos&`;
  return fetch(url).then((response) => {
    return response.json();
  });
}

async function get_highlights() {
  const url = `${urlBase}/highlights?_expand=album`;
  return fetch(url).then((response) => {
    return response.json();
  });
}

async function get_photos(idAlbum) {
  const url = `${urlBase}/photos?albumId=${idAlbum}&`;
  return fetch(url).then((response) => {
    return response.json();
  });
}
