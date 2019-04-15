

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

export const repIDFunction = (id) => {
  console.log('the rep id in actions is ,', id);
  return {
    type: 'CHOSENREP',
    payload: { repID: id }
  }
}

export const showSearchFunction = (searchValue) => {
  return {
    type: 'SHOWSEARCH',
    payload: { showSearch: searchValue }
  }
}

