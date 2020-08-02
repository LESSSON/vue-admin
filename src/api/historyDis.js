import request from '@/utils/request'


// 根据历史灾害信息id，获取关联文件信息列表
export function getDisFileInfos(disRegId) {
  return request({
    url: '/company/get-dis-file-infos',
    method: 'get',
    params: {
      disRegId
    },
    // baseURL: 'http://47.102.101.25:8088'
  })
}
// 获取病害名
export function getDisNames() {
  return request({
    url: '/company/get-disNames',
    method: 'get',
    params: {},
    baseURL: 'http://47.102.101.25:8088'
  })
}
// 获取路段类型名
export function getDisRoadTypes() {
  return request({
    url: '/company/get-disRoad-types',
    method: 'get',
    params: {},
    // baseURL: 'http://47.102.101.25:8088'
  })
}
// 获取病害治理类型名
export function getDisTreatTypes() {
  return request({
    url: '/company/get-disTreat-types',
    method: 'get',
    params: {},
    // baseURL: 'http://47.102.101.25:8088'
  })
}
// 获取灾害记录
export function getHistoryDisInfos(limit, offset) {
  return request({
    url: '/company/get-history-disInfos',
    method: 'get',
    params: {
      limit,
      offset
    },
    // baseURL: 'http://47.102.101.25:8088'
  })
}
// 获取灾害记录
export function getHistoryDisInfosByDisName(disName) {
  return request({
    url: '/company/get-history-disInfos-by-disName',
    method: 'get',
    params: {
      disName,
    },
    // baseURL: 'http://47.102.101.25:8088'
  })
}



// 删除历史灾害信息关联文件信息
export function delDisFileInfo(id) {
  return request({
    url: '/company/del-dis-file-info',
    method: 'delete',
    params: {
      id
    },
    baseURL: 'http://47.102.101.25:8088'
  })
}

//上传历史灾害信息关联文件信息
export function addDisFileInfo(
  disRegId,
  fileDes,
  fileName,
  fileTitle,
  fileType,
  uploadDate,
  userName,
) {
  return request({
    url: '/company/add-dis-file-info',
    method: 'post',
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // },
    data: {
      disRegId,
      fileDes,
      fileName,
      fileTitle,
      fileType,
      uploadDate,
      userName,
    },
    // baseURL: 'http://47.102.101.25:8088'
  })
}
// 新增历史病害信息
export function addHistoryDisInfo(
  direct,
  disName,
  disRegId,
  formCause,
  location,
  repCost,
  repPreMethod,
  reportDate,
  roadType,
  shtName,
  shtNamesSup,
  status,
  treatType,
  userName,
) {
  return request({
    url: '/company/add-history-disInfo',
    method: 'post',
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // },
    data: {
      direct,
      disName,
      disRegId,
      formCause,
      location,
      repCost,
      repPreMethod,
      reportDate,
      roadType,
      shtName,
      shtNamesSup,
      status,
      treatType,
      userName,
    },
    // baseURL: 'http://47.102.101.25:8088'
  })
}

// 修改历史灾害信息关联文件信息
export function modifyDisFileInfo(
  disRegId, fileDes, fileName, fileTitle, fileType, uploadDate, userName) {
  return request({
    url: '/company/modify-dis-file-info',
    method: 'put',
    params: {
      disRegId,
      fileDes,
      fileName,
      fileTitle,
      fileType,
      uploadDate,
      userName
    },
    // baseURL: 'http://47.102.101.25:8088/'
  })
}
