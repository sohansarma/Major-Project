import {
  getFeed,
  getOwnProfile,
  login,
  register,
} from './api';

export const initalData = {
  error: false,
  errorMessage: null,
  token: null,
  loading: false,
  user: {},
  feed: [],
  feedType: null,
  suggestedKeyWords: [],
};

export const reducer = (
  state = initalData,
  action,
) => {
  switch(action.type) {
    case 'error':
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };
    case 'setToken':
      return {
        ...state,
        token: action.token,
      };
    case 'setLoading':
      return {
        ...state,
        loading: action.loading,
      };
    case 'setUser':
      return {
        ...state,
        user: action.user,
      };
    case 'setFeed':
      return {
        ...state,
        feed: action.feed,
        feedType: action.feedType,
        suggestedKeywords: action.keywords,
      };
    default: return state;
  }
}


export const setError = (dispatch) => message => {
  dispatch(setError({
    type: 'error',
    message,
  }))
};

export const setLoading = (dispatch) => () => {
  dispatch(setError({
    type: 'loading',
    loading: true,
  }))
};

export const setLoaded = (dispatch) => () => {
  dispatch(setError({
    type: 'loading',
    loading: false,
  }))
};

export const setToken = (dispatch) => token => {
  localStorage.setItem('token', token);
  dispatch({
    type: 'setToken',
    token,
  })
}

export const setUser = (dispatch) => async () => {
  setLoading(dispatch)();
  try {
    const user = await getOwnProfile();
    dispatch({
      type: 'setUser',
      user,
    });
    setLoaded(dispatch)();
  } catch (e) {
    setLoaded(dispatch)();
    setError(dispatch)(e.message);
  }
}

export const loginUser = (dispatch) => async ({ email, password }) => {
  setLoading(dispatch)();
  try {
    const { token } = await login({ email, password });
    setToken(dispatch)(token);
    setLoaded(dispatch)();
    return true;
  } catch (e) {
    setLoaded(dispatch)();
    setError(dispatch)(e.message);
  }
  return false;
}

export const registerUser = (dispatch) => async (body) => {
  setLoading(dispatch)();
  try {
    const _ = await register(body);
    setLoaded(dispatch)();
    return true;
  } catch (e) {
    setLoaded(dispatch)();
    setError(dispatch)(e.message);
  }
  return false;
}

export const signOut = (dispatch) => () => {
  localStorage.clear();
  dispatch({
    type: 'setToken',
    token: null,
  })
}

export const setFeed = (dispatch) => async (feedType) => {
  setLoading(dispatch)();
  try {
    const { posts, suggestions } = await getFeed();
    dispatch({
      type: 'setFeed',
      feedType,
      feed: posts,
      suggestedKeywords: suggestions,
    });
    setLoaded(dispatch)();
  } catch (e) {
    setLoaded(dispatch)();
    setError(dispatch)();
  }
}
