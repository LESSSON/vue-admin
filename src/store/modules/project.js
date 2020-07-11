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

const project = {




}

const actions = {

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
    var telnumber1 = info.telnumber1
    var telnumber2 = info.telnumber2
    var address = info.address
    var shtName = info.shtName
    var photo = info.photo
    return new Promise((resolve, reject) => {
      doRegister(name, userName, password, cardId, sex, academic, nation, position, telnumber1, telnumber2, address, shtName, photo).then(response => {
        // console.log(response)
        const data = response.data
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
}

export default {
  namespaced: true,
  actions
}
