import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  const uid = uuid();
  let band
  let id
  switch (action.type) {
    case 'ADD_BAND':
      band = { name: action.name, id: uid}
      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':
      id = action.id
      return { ...state, bands: state.bands.filter(band => id !== band.id) }
    default:
      return state;
  }
};
