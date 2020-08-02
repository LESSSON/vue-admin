import request from '@/utils/request'

export function getFileList(type, typeId) {
  return request({
    url: '/file/' + type + "/" + typeId + '/fileList',
    method: 'get',
    params: {},
    // baseURL: 'http://47.102.101.25:8088'
    baseURL: 'http://47.102.101.25:8088/management'
  })
}
export function delFile(type, typeId, fileName) {
  return request({
    url: '/file/' + type + "/" + typeId + '/' + fileName,
    method: 'delete',
    params: {},
    // baseURL: 'http://47.102.101.25:8088'
    baseURL: 'http://47.102.101.25:8088/management'
  })
}
export function uploadFile(type, typeId, file) {
  return request({
    // url: '/company/' + type + "/" + typeId + '/upload',
    url: '/file/' + type + '/' + typeId + '/upload',
    method: 'post',
    processData: false,
    contentType: false,
    data: {
      file
    },
    // baseURL: 'http://47.102.101.25:8088'
    baseURL: 'http://47.102.101.25:8088/management'

  })
}
