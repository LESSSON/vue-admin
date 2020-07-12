import {
  getPositions
} from '@/api/register'
import {
  getWkdptShortnames
} from '@/api/register'
import {
  checkUsername
} from '@/api/register'
import {
  doRegister
} from '@/api/register'

// history.js
import {
  getDisFileInfos
} from '@/api/historyDis'
import {
  getDisNames
} from '@/api/historyDis'
import {
  getDisRoadTypes
} from '@/api/historyDis'
import {
  getDisTreatTypes
} from '@/api/historyDis'
import {
  getHistoryDisInfos
} from '@/api/historyDis'
import {
  getHistoryDisInfosByDisName
} from '@/api/historyDis'
import {
  delDisFileInfo
} from '@/api/historyDis'
import {
  addDisFileInfo
} from '@/api/historyDis'
import {
  addHistoryDisInfo
} from '@/api/historyDis'
import {
  modifyDisFileInfo
} from '@/api/historyDis'

// file.js
import {
  getFileList
} from '@/api/file'
import {
  delFile
} from '@/api/file'
import {
  uploadFile
} from '@/api/file'

// disPro.js
import {
  addDisProInfo
} from '@/api/disPro'
import {
  deleteDisProInfo
} from '@/api/disPro'
import {
  getDisProInfoByProName
} from '@/api/disPro'
import {
  getDisProInfos
} from '@/api/disPro'
import {
  modifyDisProInfo
} from '@/api/disPro'

const project = {

  state: {
    post_flag: 0,
  },

  mutations: {
    SET_CONTENT_TYPE: (state, flag) => {
      state.post_flag = flag
    }
  },

  actions: {
    // const actions = {

    GetPositions({
      commit
    }, info) {
      return new Promise((resolve, reject) => {

        var levelType = info.levelType
        console.log(levelType)
        getPositions(levelType).then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetWkdptShortnames({
      commit
    }, info) {
      var levelType = info.levelType
      return new Promise((resolve, reject) => {
        getWkdptShortnames(levelType).then(response => {
          // console.log("store")
          // console.log(response)
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    CheckUsername({
      commit
    }, info) {
      var userName = info.userName
      return new Promise((resolve, reject) => {
        checkUsername(userName).then(response => {
          // console.log(response)
          const data = response.status
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    DoRegister({
      commit
    }, info) {
      var name = info.name
      var userName = info.userName
      var password = info.password
      var cardId = info.cardId
      var sex = info.sex
      var academic = info.academic
      var nation = info.nation
      var position = info.position
      var mobile = info.mobile
      var telnumber1 = info.telnumber1
      var telnumber2 = info.telnumber2
      var address = info.address
      var shtName = info.shtName
      var photo = info.photo
      commit('SET_CONTENT_TYPE', 1)
      return new Promise((resolve, reject) => {
        doRegister(name, userName, password, cardId, sex, academic, nation, position, mobile, telnumber1, telnumber2, address, shtName, photo).then(response => {
          // console.log(response)
          commit('SET_CONTENT_TYPE', 0)
          const data = response.status
          resolve(data)
        }).catch(error => {
          commit('SET_CONTENT_TYPE', 0)
          reject(error)
        })
      })
    },

    // historyDis

    GetDisFileInfos({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        var disRegId = info.disRegId
        getDisFileInfos(disRegId).then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    GetDisNames({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        getDisFileInfos().then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    GetDisRoadTypes({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        getDisRoadTypes().then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    GetDisTreatTypes({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        getDisTreatTypes().then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    GetHistoryDisInfos({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        var limit = info.limit
        var offset = info.offset
        getHistoryDisInfos(limit, offset).then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    GetHistoryDisInfosByDisName({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        var disName = info.disName
        getHistoryDisInfosByDisName(disName).then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    DelDisFileInfo({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        var id = info.id
        delDisFileInfo(id).then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    AddDisFileInfo({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        var disRegId = info.disRegId
        var fileDes = info.fileDes
        var fileName = info.fileName
        var fileTitle = info.fileTitle
        var fileType = info.fileType
        var uploadDate = info.uploadDate
        var userName = info.userName
        delDisFileInfo(disRegId,
          fileDes,
          fileName,
          fileTitle,
          fileType,
          uploadDate,
          userName, ).then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    AddHistoryDisInfo({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        var direct = info.direct
        var disName = info.disName
        var disRegId = info.disRegId
        var formCause = info.formCause
        var location = info.location
        var repCost = info.repCost
        var repPreMethod = info.repPreMethod
        var reportDate = info.reportDate
        var roadType = info.roadType
        var shtName = info.shtName
        var shtNamesSup = info.shtNamesSup
        var status = info.status
        var treatType = info.treatType
        var userName = info.userName
        addHistoryDisInfo(direct,
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
          userName, ).then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    ModifyDisFileInfo({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        var disRegId = info.disRegId
        var fileDes = info.fileDes
        var fileName = info.fileName
        var fileTitle = info.fileTitle
        var fileType = info.fileType
        var uploadDate = info.uploadDate
        var userName = info.userName
        modifyDisFileInfo(disRegId,
          fileDes,
          fileName,
          fileTitle,
          fileType,
          uploadDate,
          userName).then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // file

    GetFileList({
      commit
    }, info) {
      var type = info.type
      var typeId = info.typeId
      return new Promise((resolve, reject) => {
        getFileList(type, typeId).then(response => {
          // console.log("store")
          // console.log(response)
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    DelFile({
      commit
    }, info) {
      var type = info.type
      var typeId = info.typeId
      var fileName = info.fileName
      return new Promise((resolve, reject) => {
        delFile(type, typeId, fileName).then(response => {
          // console.log("store")
          // console.log(response)
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    UploadFile({
      commit
    }, info) {
      var type = info.type
      var typeId = info.typeId
      return new Promise((resolve, reject) => {
        uploadFile(type, typeId).then(response => {
          // console.log("store")
          // console.log(response)
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // disPro

    AddDisProInfo({
      commit
    }, info) {
      var auditName = info.auditName
      var auditUserName = info.auditUserName
      var contractSeg = info.contractSeg
      var disRegId = info.disRegId
      var proDate = info.proDate
      var proDes = info.proDes
      var proId = info.proId
      var proName = info.proName
      var proStatus = info.proStatus
      var regDate = info.regDate
      var reqConDate = info.reqConDate
      var shtNameSup = info.shtNameSup
      var userName = info.userName
      return new Promise((resolve, reject) => {
        addDisProInfo(
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
        ).then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    DeleteDisProInfo({
      commit
    }, info) {
      var proId = info.proId
      return new Promise((resolve, reject) => {
        deleteDisProInfo(
          proId,
        ).then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    GetDisProInfoByProName({
      commit
    }, info) {
      var proName = info.proName
      return new Promise((resolve, reject) => {
        getDisProInfoByProName(
          proName,
        ).then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    GetDisProInfos({
      commit
    }, info) {
      var limit = info.limit
      var offset = info.offset
      return new Promise((resolve, reject) => {
        getDisProInfos(
          limit,
          offset
        ).then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    ModifyDisProInfo({
      commit
    }, info) {
      var auditName = info.auditName
      var auditUserName = info.auditUserName
      var contractSeg = info.contractSeg
      var disRegId = info.disRegId
      var proDate = info.proDate
      var proDes = info.proDes
      var proId = info.proId
      var proName = info.proName
      var proStatus = info.proStatus
      var regDate = info.regDate
      var reqConDate = info.reqConDate
      var shtNameSup = info.shtNameSup
      var userName = info.userName
      return new Promise((resolve, reject) => {
        modifyDisProInfo(
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
        ).then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },


  }
}

export default project
// export default {
//   namespaced: true,
//   actions
// }
