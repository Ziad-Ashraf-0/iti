export function changeLang(langdata) {
  return {
    type: "SET_Language",
    payload: langdata,
  };
}

export function setLoader(loderData) {
  return {
    type: "SET_Loader",
    payload: loderData,
  };
}

export function setFavorite(toFav) {
  return {
    type: "SET_Favorite",
    payload: toFav,
  };
}

export function AddToFavourite(data) {
  return {
    type: "SET_Favourite",
    payload: data,
  };
}

export function RemoveFavourite(data) {
  return {
    type: "REMOVE_Favourite",
    payload: data,
  };
}
