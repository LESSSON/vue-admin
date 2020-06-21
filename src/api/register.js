import request from '@/utils/request'

export function getPositionsByLevelType(levelType) {
  return request({
    url: '/management/company/getPositionsByLevelType',
    method: 'get',
    params: levelType,
    baseURL: 'http://47.102.101.25:8088'
  })
}
