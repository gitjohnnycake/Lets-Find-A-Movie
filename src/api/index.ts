import http from './http'

export const getMovie = () => {
  return http.request({
    url: '/movie',
    method: 'get'
  })
}