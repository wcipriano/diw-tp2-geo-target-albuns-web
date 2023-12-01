window.addEventListener("load", () => {
  //Destaques
  get_highlights().then((json_data) => {
    carousel_render(json_data);
  });

  //Albuns
  get_albums().then((json_data) => {
    //Map render
    map_render(json_data);

    //Albums render
    album_render(json_data);
  });
});
