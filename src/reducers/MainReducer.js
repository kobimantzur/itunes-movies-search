import {
  SET_MOVIE,
  SET_SEARCH_RESULTS,
  TERM_CHANGED,
  ERROR,
  LOADING,
  SEARCH_TYPE_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  selectedMovie: null,
  searchResultList: [],
  term: '',
  errorMessage: '',
  isLoading: false,
  searchType: 'movie'
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SET_MOVIE:
    return { ...state, selectedMovie: action.payload, errorMessage: '', isLoading: false }
    case SET_SEARCH_RESULTS:
    return { ...state, searchResultList: action.payload, errorMessage: '', isLoading: false }
    case TERM_CHANGED:
    return { ...state, term: action.payload, isLoading: false }
    case ERROR:
    return { ...state, errorMessage: action.payload, isLoading: false }
    case LOADING:
    return { ...state, isLoading: action.payload,  searchResultList: [], errorMessage: '', }
    case SEARCH_TYPE_CHANGED:
    return { ...state, searchType: action.payload }
    default:
    return state;
  }
};
