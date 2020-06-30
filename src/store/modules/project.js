import { getPositions } from '@/api/register'
import { getWkdptShortnames } from '@/api/register'
import { checkUsername } from '@/api/register'

const project = {

    actions:{

        GetPositions({ commit }, info) {
            return new Promise((resolve, reject) => {
                var levelType = info.levelType
                getPositions(levelType).then(response => {
                const data = response.data
                resolve(data)
              }).catch(error => {
                reject(error)
              })
            })
          },
        GetWkdptShortnames({ commit }, info) {
            var levelType = info.levelType
            return new Promise((resolve, reject) => {
                getWkdptShortnames(levelType).then(response => {
                const data = response.data
                resolve(data)
              }).catch(error => {
                reject(error)
              })
            })
          },
        CheckUsername({ commit }, info) {
            var levelType = info.userName
            return new Promise((resolve, reject) => {
                checkUsername(userName).then(response => {
                const data = response.data
                resolve(data)
              }).catch(error => {
                reject(error)
              })
            })
          },

    }


}