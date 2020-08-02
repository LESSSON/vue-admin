import {
  getPositions
} from '@/api/register'
import {
  getDptNamesFromCompany
} from '@/api/register'
import {
  getDptNamesFromConstructor
} from '@/api/register'
import {
  getDptNamesFromSupervisor
} from '@/api/register'
import {
  checkCompanyJobId
} from '@/api/register'
import {
  checkConstructorJobId
} from '@/api/register'
import {
  checkSupervisorJobId
} from '@/api/register'
import {
  doCompanyRegister
} from '@/api/register'
import {
  doConstructorRegister
} from '@/api/register'
import {
  doSupervisorRegister
} from '@/api/register'
import {
  verifyStaff
} from '@/api/register'
import {
  getUnverifiedStaffs
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
    },
    SET_FILE_FLAG: (state, flag) => {
      state.file_flag = flag
    },
  },

  actions: {

    GetPositions({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        getPositions().then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetDptNamesFromCompany({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        getDptNamesFromCompany().then(response => {
          // console.log("store")
          // console.log(response)
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetDptNamesFromConstructor({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        getDptNamesFromConstructor().then(response => {
          // console.log("store")
          // console.log(response)
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetDptNamesFromSupervisor({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        getDptNamesFromSupervisor().then(response => {
          // console.log("store")
          // console.log(response)
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    CheckCompanyJobId({
      commit
    }, info) {
      var jobId = info.jobId
      var dptName = info.dptName
      return new Promise((resolve, reject) => {
        checkCompanyJobId(jobId, dptName).then(response => {
          // console.log(response)
          const data = response.status
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    CheckConstructorJobId({
      commit
    }, info) {
      var jobId = info.jobId
      var unitName = info.unitName
      return new Promise((resolve, reject) => {
        checkConstructorJobId(jobId, unitName).then(response => {
          // console.log(response)
          const data = response.status
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    CheckSupervisorJobId({
      commit
    }, info) {
      var jobId = info.jobId
      var unitName = info.unitName
      return new Promise((resolve, reject) => {
        checkSupervisorJobId(jobId, unitName).then(response => {
          // console.log(response)
          const data = response.status
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    DoCompanyRegister({
      commit
    }, info) {
      var name = info.name
      var jobId = info.jobId
      var password = info.password
      var cardId = info.idCard
      var sex = info.sex
      var nation = info.nation
      var academic = info.academic
      var position = info.position
      var dptName = info.dptName
      var mobile = info.mobile
      var email = info.email
      var otherTel1 = info.otherTel1
      var otherTel2 = info.otherTel2
      var address = info.address
      var status = info.status
      commit('SET_CONTENT_TYPE', 1)
      return new Promise((resolve, reject) => {
        doCompanyRegister(name, jobId, password, cardId, sex, nation, academic,
          position, dptName, mobile, email, otherTel1, otherTel2, address, status).then(response => {
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
    DoConstructorRegister({
      commit
    }, info) {
      var name = info.name
      var jobId = info.jobId
      var password = info.password
      var idCard = info.idCard
      // console.log("idCard")
      // console.log(idCard)
      var telNumber = info.telNumber
      var email = info.email
      var status = info.status
      var type = info.type
      var unitName = info.unitName
      commit('SET_CONTENT_TYPE', 1)
      return new Promise((resolve, reject) => {
        doConstructorRegister(name,
          jobId,
          password,
          idCard,
          telNumber,
          email,
          status,
          type,
          unitName).then(response => {
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
    DoSupervisorRegister({
      commit
    }, info) {
      var name = info.name
      var jobId = info.jobId
      var password = info.password
      var idCard = info.idCard
      console.log("idCard")
      console.log(idCard)
      var telNumber = info.telNumber
      var email = info.email
      var status = info.status
      var type = info.type
      var unitName = info.unitName
      commit('SET_CONTENT_TYPE', 1)
      return new Promise((resolve, reject) => {
        doSupervisorRegister(name,
          jobId,
          password,
          idCard,
          telNumber,
          email,
          status,
          type,
          unitName, ).then(response => {
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

    VerifyStaff({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        var id = info.id
        var organizationType = info.organizationType
        verifyStaff(id, organizationType).then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    GetUnverifiedStaffs({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        var dptName = info.dptName
        getUnverifiedStaffs(dptName, 10, 0).then(response => {
          const data = response.data
          resolve(data)
        }).catch(error => {
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
          const data = response.status
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
      console.log("info")
      console.log(info)
      var type = info.type
      var typeId = info.typeId
      var file = info.data
      console.log("file")
      console.log(file)
      file.forEach((value, key) => {
        console.log(`key ${key}: value ${value}`);
      })
      // console.log(file)
      return new Promise((resolve, reject) => {
        // commit('SET_FILE_FLAG', 1)
        uploadFile(type, typeId, file).then(response => {
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
