import http from './http'

export const menuList = () => {
  return http.request({
    url: '/users/menuList',
    method: 'get'
  })
}