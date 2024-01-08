// const urlBase = "https://api-albuns.wagnercipriano.repl.co";
const urlBase =
  "https://233a12c3-e495-429a-b932-f7b05fdb747b-00-2ij8stygk0xz0.spock.replit.dev";

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
