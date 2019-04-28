import instance from './axiosBase';
import {
  LOGIN_URL,
  REGISTER_URL,
  ME_URL,
  COMMENT_CREATE_URL,
  USER_SINGLE_URL,
  USER_FOLLOW_URL,
  USER_PROFILE_PICTURE_URL,
  FEED_URL,
  KEYWORD_SEARCH_URL,
  POST_CREATE_URL,
  POST_KEYWORD_URL,
  POST_LIKE_URL,
} from './utils';

export const throwErrIfRequired = res => {
  if (res.error) throw new Error(res.error);
  return res;
}

// should contain email address and password
export const login = (data) =>
  instance
    .post(LOGIN_URL, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => throwErrIfRequired(res))
    .then(({ data }) => data);

// should contain email id, password and name etc etc
export const register = (data) =>
  instance
    .post(REGISTER_URL, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => throwErrIfRequired(res))
    .then(({ data }) => data);

export const getOwnProfile = () =>
  instance
    .get(ME_URL, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => throwErrIfRequired(res))
    .then(({ data }) => data);

export const getSpecificUser = (id) =>
  instance
    .get(`${USER_SINGLE_URL}${id}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => throwErrIfRequired(res))
    .then(({ data }) => data);

export const followKeyWord = (id) =>
  instance
    .get(`${USER_FOLLOW_URL}${id}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => throwErrIfRequired(res))
    .then(({ data }) => data);

export const updateProfilePicture = (formData) =>
  instance
    .post(USER_PROFILE_PICTURE_URL, formData)
    .then(res => throwErrIfRequired(res))
    .then(({ data }) => data);
// should be text and postID
export const createComment = (data) =>
  instance
    .post(COMMENT_CREATE_URL, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => throwErrIfRequired(res))
    .then(({ data }) => data);

export const getFeed = () =>
  instance
    .get(FEED_URL, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => throwErrIfRequired(res))
    .then(({ data }) => data);

export const keywordSearch = (text) =>
  instance
    .get(`${KEYWORD_SEARCH_URL}${text}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => throwErrIfRequired(res))
    .then(({ data }) => data);

export const postsByKeyWord = (id) =>
  instance
    .get(`${POST_KEYWORD_URL}${id}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => throwErrIfRequired(res))
    .then(({ data }) => data);

export const likeAPost = (id) =>
  instance
    .get(`${POST_LIKE_URL}${id}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => throwErrIfRequired(res))
    .then(({ data }) => data);

// should be formdata and contain title, description and files
export const createPost = (data) =>
  instance
    .post(POST_CREATE_URL, data)
    .then(res => throwErrIfRequired(res))
    .then(({ data }) => data);