import request from '@/utils/request'

export function loginByUsername (username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: 'api/user/login',
    method: 'post',
    data
  })
}

export function logout (token) {
  const data = { token }
  return request({
    url: 'api/user/logout',
    method: 'post',
    data
  })
}

export function saveUser (data) {
  return request({
    url: 'api/user/SaveUser',
    method: 'post',
    data
  })
}

export function removeUser (data) {
  return request({
    url: 'api/user/RemoveUser',
    method: 'post',
    data
  })
}

export function queryUsers (data) {
  return request({
    url: 'api/user/getUsers',
    method: 'post',
    data
  })
}

export function changePwd (data) {
  return request({
    url: 'api/user/changePassword',
    method: 'post',
    data
  })
}
