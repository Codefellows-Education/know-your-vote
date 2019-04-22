

export const showRepsFunction = (repsValue) => {
  console.log('in the actions with ', repsValue)
  return {
    type: 'SHOWREPS',
    payload: { showReps: repsValue }
  };
};

export const showRepFunction = (repValue) => {
  console.log('payload fromm actions -showing Rep', repValue);
  return {
    type: 'SHOWREP',
    payload: { showRep: repValue }
  }
}

export const repFunction = (rep) => {
  console.log('the rep in actions is ,', rep);
  return {
    type: 'CHOSENREP',
    payload: { rep: rep }
  }
}

export const showSearchFunction = (searchValue) => {
  return {
    type: 'SHOWSEARCH',
    payload: { showSearch: searchValue }
  }
}

