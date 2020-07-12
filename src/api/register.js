import request from '@/utils/request'

export function getPositions(levelType) {
  return request({
    url: '/management/company/get-positions',
    method: 'get',
    params: {
      levelType
    },
    baseURL: 'http://47.102.101.25:8088'
  })
}

export function getWkdptShortnames(levelType) {
  return request({
    url: '/management/company/get-wkdpt-shortnames',
    method: 'get',
    params: {
      levelType
    },
    baseURL: 'http://47.102.101.25:8088'
  })
}

export function checkUsername(userName) {
  return request({
    url: '/management/company/check-username',
    method: 'get',
    params: {
      userName
    },
    baseURL: 'http://47.102.101.25:8088'
  })
}
export function doRegister(name,
  userName,
  password,
  cardId,
  sex,
  academic,
  nation,
  position,
  mobile,
  telnumber1,
  telnumber2,
  address,
  shtName,
  photo) {
  return request({
    url: '/management/company/register',
    method: 'post',
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // },
    data: {
      name,
      userName,
      password,
      cardId,
      sex,
      academic,
      nation,
      position,
      mobile,
      telnumber1,
      telnumber2,
      address,
      shtName,
      photo
    },
    baseURL: 'http://47.102.101.25:8088'
  })
}
