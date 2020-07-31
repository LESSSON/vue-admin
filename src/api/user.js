import request from '@/utils/request'

// export function login(data) {
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }

export function login(dptOrUnitName, jobId, password, organizationType) {
  return request({
    // url: decodeURI('/' + organizationType + '/login'),
    url: '/' + organizationType + '/login',
    method: 'post',
    data: {
      dptOrUnitName,
      jobId,
      password
    },
    baseURL: 'http://47.102.101.25:8088'
  })
}


export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: {
      token
    }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
