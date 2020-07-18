import {
  getPositions
} from '@/api/register'
import {
  getDptNames
} from '@/api/register'
import {
  checkJobId
} from '@/api/register'
import {
  doRegister
} from '@/api/register'

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
    GetDptNames({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        getDptNames().then(response => {
          // console.log("store")
          // console.log(response)
          const data = response.data
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    CheckJobId({
      commit
    }, info) {
      var jobId = info.jobId
      return new Promise((resolve, reject) => {
        checkJobId(jobId).then(response => {
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
      var jobId = info.jobId
      var password = info.password
      var cardId = info.cardId
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
        doRegister(name, jobId, password, cardId, sex, nation, academic,
          position, dptName, mobile, email, otherTel1, otherTel2, address, status).then(response => {
          // console.log(response)
          commit('SET_CONTENT_TYPE', 0)
          const data = response.data
          resolve(data)
        }).catch(error => {
          commit('SET_CONTENT_TYPE', 0)
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
