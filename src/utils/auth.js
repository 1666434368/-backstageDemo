import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  var inTwoHours = 1 / 12 // 设置cookie时效为两个小时
  return Cookies.set(TokenKey, token, { expires: inTwoHours })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
