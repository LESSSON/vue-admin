import request from '@/utils/request'

export function getPositions() {
  return request({
    url: '/company/get-positions',
    method: 'get',
    // baseURL: 'http://47.102.101.25:8088'
  })
}
// 高速公路公司
export function getDptNamesFromCompany() {
  return request({
    url: '/company/get-dpt-names',
    method: 'get',
    // baseURL: 'http://47.102.101.25:8088'
  })
}
// 施工方
export function getDptNamesFromConstructor() {
  return request({
    url: '/constructor/get-unit-names',
    method: 'get',
    // baseURL: 'http://47.102.101.25:8088'
  })
}
// 监理方
export function getDptNamesFromSupervisor() {
  return request({
    url: '/supervisor/get-unit-names',
    method: 'get',
    // baseURL: 'http://47.102.101.25:8088'
  })
}

export function checkCompanyJobId(jobId, dptName) {
  return request({
    url: '/company/check-jobId',
    method: 'get',
    params: {
      jobId,
      dptName
    },
    // baseURL: 'http://47.102.101.25:8088'
  })
}
export function checkConstructorJobId(jobId, unitName) {
  return request({
    url: '/constructor/check-jobId',
    method: 'get',
    params: {
      jobId,
      unitName
    },
    // baseURL: 'http://47.102.101.25:8088'
  })
}
export function checkSupervisorJobId(jobId, unitName) {
  return request({
    url: '/supervisor/check-jobId',
    method: 'get',
    params: {
      jobId,
      unitName
    },
    // baseURL: 'http://47.102.101.25:8088'
  })
}

export function doCompanyRegister(
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
    url: '/company/register',
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
    // baseURL: 'http://47.102.101.25:8088'
  })
}
export function doConstructorRegister(
  name,
  jobId,
  password,
  idCard,
  telNumber,
  email,
  status,
  type,
  unitName,
) {
  return request({
    url: '/constructor/register',
    method: 'post',
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // },

    data: {
      name,
      jobId,
      password,
      idCard,
      telNumber,
      email,
      status,
      type,
      unitName,
    },
    // baseURL: 'http://47.102.101.25:8088'
  })
}
export function doSupervisorRegister(
  name,
  jobId,
  password,
  idCard,
  telNumber,
  email,
  status,
  type,
  unitName,
) {
  return request({
    url: '/supervisor/register',
    method: 'post',
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // },

    data: {
      name,
      jobId,
      password,
      idCard,
      telNumber,
      email,
      status,
      type,
      unitName,
    },
    // baseURL: 'http://47.102.101.25:8088'
  })
}
