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
    url: '/' + organizationType + '/login',
    method: 'post',
    data: {
      dptOrUnitName,
      jobId,
      password
    },
    baseURL: 'http://47.102.101.25:8088/management'
  })
}


export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: {
      token
    },
    // baseURL: '/dev-api'
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post',
    // baseURL: '/dev-api'
  })
}
