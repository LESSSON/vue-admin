import request from '@/utils/request'

export function getPositions() {
  return request({
    url: '/management/company/get-positions',
    method: 'get',
    baseURL: 'http://47.102.101.25:8088'
  })
}

export function getDptNames() {
  return request({
    url: '/management/company/get-dpt-names',
    method: 'get',
    baseURL: 'http://47.102.101.25:8088'
  })
}

export function checkJobId(jobId) {
  return request({
    url: '/management/company/check-jobId',
    method: 'get',
    params: {
      jobId
    },
    baseURL: 'http://47.102.101.25:8088'
  })
}

export function doRegister(
  name,
  jobId,
  password,
  cardId,
  sex,
  nation,
  academic,
  position,
  dptName,
  mobile,
  email,
  otherTel1,
  otherTel2,
  address,
  status
  ) {
  return request({
    url: '/management/company/register',
    method: 'post',
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // },

    data: {

      name,
      jobId,
      password,
      cardId,
      sex,
      nation,
      academic,
      position,
      dptName,
      mobile,
      email,
      otherTel1,
      otherTel2,
      address,
      status
    },
    baseURL: 'http://47.102.101.25:8088'
  })
}
