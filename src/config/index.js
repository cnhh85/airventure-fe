const publicRuntimeConfig = {
  NODE_ENV: process.env.NODE_ENV || 'production',
  API_URL: process.env.REACT_APP_API_URL,
  GOOGLE_CLIENT_ID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  LOCALSTORAGE_TOKEN_NAME: 'token',
  LOCALSTORAGE_USER_NAME: 'user',
  LOCALSTORAGE_JWT_USER_NAME: 'jwt_user',
  LOCALSTORAGE_AVATAR_NAME: 'user_avatar',
}

export const {
  NODE_ENV,
  API_URL,
  LOCALSTORAGE_TOKEN_NAME,
  LOCALSTORAGE_USER_NAME,
  LOCALSTORAGE_JWT_USER_NAME,
  LOCALSTORAGE_AVATAR_NAME,
  GOOGLE_CLIENT_ID,
} = publicRuntimeConfig

export default publicRuntimeConfig.NODE_ENV
