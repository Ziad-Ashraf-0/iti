let initialState = {
  lang: "en-US",
  loader: false,
  favourites: [],
};

export default function languageReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_Language":
      return {
        ...state,
        lang: action.payload,
      };

    case "SET_Favourite":
      let isIn = state.favourites.findIndex(
        (element) => element.id === action.payload.id
      );
      if (isIn !== -1) return state;
      state.favourites.push(action.payload);
      return state;

    case "REMOVE_Favourite":
      let newArray = state.favourites.filter(
        (element) => element.id !== action.payload.id
      );
      console.log(newArray);
      state.favourites = newArray;
      return state;

    default:
      return state;
  }
}
