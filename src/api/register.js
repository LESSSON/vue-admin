import request from '@/utils/request'

export function getPositions() {
  return request({
    url: '/management/company/get-positions',
    method: 'get',
    baseURL: 'http://47.102.101.25:8088'
  })
}
// 高速公路公司
export function getDptNamesFromCompany() {
  return request({
    url: '/management/company/get-dpt-names',
    method: 'get',
    baseURL: 'http://47.102.101.25:8088'
  })
}
// 施工方
export function getDptNamesFromConstructor() {
  return request({
    url: '/management/constructor/get-unit-names',
    method: 'get',
    baseURL: 'http://47.102.101.25:8088'
  })
}
// 监理方
export function getDptNamesFromSupervisor() {
  return request({
    url: '/management/supervisor/get-unit-names',
    method: 'get',
    baseURL: 'http://47.102.101.25:8088'
  })
}

export function checkCompanyJobId(jobId, dptName) {
  return request({
    url: '/management/company/check-jobId',
    method: 'get',
    params: {
      jobId,
      dptName
    },
    baseURL: 'http://47.102.101.25:8088'
  })
}
export function checkConstructorJobId(jobId, unitName) {
  return request({
    url: '/management/constructor/check-jobId',
    method: 'get',
    params: {
      jobId,
      unitName
    },
    baseURL: 'http://47.102.101.25:8088'
  })
}
export function checkSupervisorJobId(jobId, unitName) {
  return request({
    url: '/management/supervisor/check-jobId',
    method: 'get',
    params: {
      jobId,
      unitName
    },
    baseURL: 'http://47.102.101.25:8088'
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
    url: '/management/constructor/register',
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
    baseURL: 'http://47.102.101.25:8088'
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
    url: '/management/supervisor/register',
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
    baseURL: 'http://47.102.101.25:8088'
  })
}
