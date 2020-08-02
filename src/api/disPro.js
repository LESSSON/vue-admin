import request from '@/utils/request'

// 新增历史病害立项信息
export function addDisProInfo(
  auditName,
  auditUserName,
  contractSeg,
  disRegId,
  proDate,
  proDes,
  proId,
  proName,
  proStatus,
  regDate,
  reqConDate,
  shtNameSup,
  userName,
) {
  return request({
    url: '/company/add-dis-pro-info',
    method: 'post',
    data: {
      auditName,
      auditUserName,
      contractSeg,
      disRegId,
      proDate,
      proDes,
      proId,
      proName,
      proStatus,
      regDate,
      reqConDate,
      shtNameSup,
      userName,
    },
    // baseURL: 'http://47.102.101.25:8088'
  })
}


// 删除历史病害立项信息
export function deleteDisProInfo(proId) {
  return request({
    url: '/company/delete-dis-pro-info',
    method: 'delete',
    params: {
      proId
    },
    // baseURL: 'http://47.102.101.25:8088'
  })
}


// 根根据立项名称获取立项信息
export function getDisProInfoByProName(proName) {
  return request({
    url: '/company/get-dis-pro-info-by-proName',
    method: 'get',
    params: {
      proName
    },
    baseURL: 'http://47.102.101.25:8088'
  })
}
// 按登记时间分页获取立项信息
export function getDisProInfos(limit, offset) {
  return request({
    url: '/company/get-dis-pro-infos',
    method: 'get',
    params: {
      limit,
      offset
    },
    // baseURL: 'http://47.102.101.25:8088'
  })
}

// 修改历史病害立项信息
export function modifyDisProInfo(
  auditName,
  auditUserName,
  contractSeg,
  disRegId,
  proDate,
  proDes,
  proId,
  proName,
  proStatus,
  regDate,
  reqConDate,
  shtNameSup,
  userName,
) {
  return request({
    url: '/company/modify-dis-file-info',
    method: 'put',
    params: {
      auditName,
      auditUserName,
      contractSeg,
      disRegId,
      proDate,
      proDes,
      proId,
      proName,
      proStatus,
      regDate,
      reqConDate,
      shtNameSup,
      userName,
    },
    // baseURL: 'http://47.102.101.25:8088'
  })
}
