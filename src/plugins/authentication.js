export const authLogout = () => {
  try {
    localStorage.removeItem('token')
    localStorage.removeItem('access_token')
    localStorage.removeItem('auth_token')
    localStorage.removeItem('token_type')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('user')
  } catch (error) {
    console.log(error)
  }
}
export const isAuth = () => {
  try {
    if( getAuthorization() != false && getUser() != null ){
      return true
    }
    return false
  } catch (error) {
    console.log(error)
  }
}
export const getToken = () => {
  try {
    const rawToken = localStorage.getItem('token')
    if (rawToken) {
      const parsedToken = JSON.parse(rawToken)
      if (parsedToken?.access_token) {
        return parsedToken
      }
    }

    const accessToken = localStorage.getItem('access_token') || localStorage.getItem('auth_token')
    if (!accessToken) {
      return null
    }

    return {
      access_token: accessToken,
      token_type: localStorage.getItem('token_type') || 'Bearer',
      expires_at: localStorage.getItem('expires_at') || null,
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
export const getAuthorization = () => {
  try {
    const token = getToken()
    return token != null && token.access_token ? ( token.token_type + ' ' + token.access_token ) : false
  } catch (error) {
    console.log(error)
    return false
  }
}
export const getAccessToken = () => {
  try {
    const token = getToken()
    return token != null && token.access_token ? token.access_token : ''
  } catch (error) {
    console.log(error)
    return ''
  }
}
export const getAccessTokenType = () => {
  try {
    const token = getToken()
    return token != null ? token.token_type : ''
  } catch (error) {
    console.log(error)
    return ''
  }
}
export const getExpiresAt = () => {
  try {
    return getToken()?.expires_at || ''
  } catch (error) {
    console.log(error)
    return ''
  }
}
export const setToken = (token) => {
  if( token == null || token.access_token == null || token.access_token === '' ){
    authLogout()
    return
  }

  localStorage.setItem('token', JSON.stringify( token ));
  localStorage.setItem('access_token', token.access_token)
  localStorage.setItem('auth_token', token.access_token)
  localStorage.setItem('token_type', token.token_type || 'Bearer')
  if( token.expires_at ){
    localStorage.setItem('expires_at', token.expires_at)
  } else {
    localStorage.removeItem('expires_at')
  }
}

export const getUser = () => {
  try {
    return JSON.parse(localStorage.getItem('user'))
  } catch (error) {
    console.log(error)
  }
}
export const setUser = (user) => {
  localStorage.setItem('user',JSON.stringify(user));
}
export const isAdmin = () => {
  let admin = getUser()
  if( isAuth() && admin !== null && admin.role == 1 ){
    return true 
  }
  return false
}
export const permissions = () => {
  let user = getUser()
  return user != null && user != undefined && user.permissions != undefined && user.permissions.length > 0 ? user.permissions : []
}
export const roles = () => {
  let user = getUser()
  return user != null && user != undefined && user.roles != undefined && user.roles.length > 0 ? user.roles : []
}
export const hasPermission = ( code ) => {
  return  Array.isArray( code ) ? (
    permissions().find( p => code.includes( p ) ) != undefined
    ? true : false
  ) : permissions().includes( code )
}
