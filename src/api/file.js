import request from '@/utils/request'

export function getFileList(type, typeId) {
  return request({
    url: '/management/company/' + type + "/" + typeId + '/fileList',
    method: 'get',
    params: {},
    baseURL: 'http://47.102.101.25:8088'
  })
}
export function delFile(type, typeId, fileName) {
  return request({
    url: '/management/company/' + type + "/" + typeId + '/' + fileName,
    method: 'delete',
    params: {},
    baseURL: 'http://47.102.101.25:8088'
  })
}
export function uploadFile(type, typeId) {
  return request({
    url: '/management/company/' + type + "/" + typeId + '/upload',
    method: 'post',
    data: {
      file,
      type,
      typeId
    },
    baseURL: 'http://47.102.101.25:8088'
  })
}