'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://9.134.240.127:443/"',
  VUE_APP_tapd_redirect_url: '"http%3a%2f%2f9.134.241.29%3a8997%2fmyproject%2fregister"'
})
