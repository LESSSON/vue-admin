import {
  login,
  logout,
  getInfo
} from '@/api/user'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import {
  resetRouter
} from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    roles: '',
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_DATA: (state, data) => {
    state.data = data
  }
}

const actions = {
  // user login
  login({
    commit
  }, userInfo) {
    // console.log(userInfo)
    const jobId = userInfo.jobId
    // const username = userInfo.jobId
    const organizationType = userInfo.organizationType
    const password = userInfo.password
    const dptOrUnitName = userInfo.dptName
    return new Promise((resolve, reject) => {
      login(
        // username,
        jobId.trim(),
        // username.trim(),
        password,
        dptOrUnitName,
        organizationType,
      ).then(response => {

        // const {
        //   data
        // } = response
        const data = response
        // console.log("response")
        // console.log(data)
        // data['token'] = {
        //   roles: [organizationType],
        //   introduction: 'I am in ' + organizationType,
        //   avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        //   name: organizationType + ' worker'
        // }
        data['token'] = organizationType + '-token'
        data['jobid'] = jobId.trim()

        // console.log("82")
        // console.log(data)
        commit('SET_TOKEN', data.token)
        commit('SET_NAME', data.jobid)
        commit('SET_DATA', data)
        commit('SET_ROLES', [organizationType])


        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const {
          data
        } = response

        console.log("106")
        console.log(data)
        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const {
          name,
          avatar,
          roles
        } = data

        // commit('SET_NAME', name)
        // commit('SET_AVATAR', avatar)
        // commit('SET_ROLES', roles)
        console("120")
        console(roles)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({
    commit
  }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
