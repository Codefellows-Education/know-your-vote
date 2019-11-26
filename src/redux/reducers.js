let initialState = {
  showReps: false,
  showRep: false,
  rep: {},
  showSearch: true
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  
  switch (type) {
    case "SHOWREPS":
    console.log('in the reduceers with ,', { ...state, showReps: payload.showReps });
      return { ...state, showReps: payload.showReps };

    case "SHOWREP":
      return { ...state, showRep: payload.showRep };

    case "CHOSENREP":
      return { ...state, rep: payload.rep };

    case "SHOWSEARCH":
      return { ...state, showSearch: payload.showSearch };

    default:
      return state;
  }
};

